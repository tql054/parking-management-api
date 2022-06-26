import db from "../models";

const getInfoQuanly = (phone) => {
    console.log(phone)
    const promise = new  Promise(async (resolve, reject) => {
        try {
            let info = await db.Quanly.findOne({
                    attributes: ['sodienthoai', 'hoten', 'diachi', 'CCCD'],
                    raw: true,
                    where: {
                        sodienthoai: '0935196475'
                    }
                }
            )
            
            resolve(info)
        } catch(e) {
            reject(e)
        }
    })

    return promise
}

const getInfoNhanVien = (phone) => {
    const promise = new  Promise(async (resolve, reject) => {
        try {
            const info = await db.Nhanvien.findOne({
                    attributes: ['sodienthoai', 'hovaten', 'diachi', 'cccd'],
                    raw: true,
                    where: {
                        sodienthoai: phone
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

const getInfoThanhvien = (phone) => {
    const promise = new  Promise(async (resolve, reject) => {
        try {
            const info = await db.Thanhvien.findOne({
                    attributes: ['sodienthoai', 'hoten', 'diachi', 'cccd'],
                    raw: true,
                    where: {
                        sodienthoai: phone
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
    getInfoNhanVien,
    getInfoQuanly,
    getInfoThanhvien
}