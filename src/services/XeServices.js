import db from '../models/index'

let getAllXeByPhone = async ({thanhvien}) => {
    console.log(thanhvien)
    const promise = new  Promise(async (resolve, reject) => {
        try {
            const info = await db.Xe.findAll({
                    attributes: ['biensoxe', 'loaixe'],
                    raw: true,
                    where: {
                        thanhvien
                    }
                }
            )
            
            resolve(info)
        } catch(e) {
            resolve(e)
        }
    })

    return promise
}

module.exports = {
    getAllXeByPhone
}
