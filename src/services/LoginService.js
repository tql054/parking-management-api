import db from '../models/index'

let handleLogin = (sodienthoai, matkhau) => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            if(await checkUserPhone(sodienthoai)) {
                let user =  await db.Taikhoan.findOne({
                    attributes: {
                        exclude: ['id']
                    },
                    where: {
                        sodienthoai
                    },
                    raw: true
                })
                // let check = await bcrypt.compareSync(password, user.password)
                if(user.matkhau === matkhau) {
                    resolve({
                        errCode: 0,
                        message: 'OK',
                        userData: user
                    })
                } else {
                    resolve({
                        errCode: 2,
                        message: "Mật khẩu chưa chính xác!"
                    })
                }
            } else {
                resolve({
                    errCode: 1,
                    message: "Số điện thoại chưa đăng ký"
                })
            }
            resolve()
        } catch (error) {
            reject(error)
        }
    });

    return promise
}

let checkUserPhone = async (sodienthoai) => {
    const promise = new Promise(async function(resolve, reject) {
        try {
            let user = await db.Taikhoan.findOne({
                attributes: {
                    exclude: ['id']
                },
                where: {
                    sodienthoai
                }
            })

            user ? resolve(true) : resolve(false)
        } catch(e) {
            reject(e)
        }
    })

    return promise
}


module.exports = {
    handleLogin
}