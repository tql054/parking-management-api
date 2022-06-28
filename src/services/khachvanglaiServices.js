import db from '../models/index'

let createKVL = ({hoten, odo, sodienthoai, cccd, biensoxe, thoigianbatdau, thoigianketthuc, nhanvien}) => {
    const promise = new Promise(async function (resolve, reject) {

        try {
            await db.Dangkyvanglai.create({
                hoten,
                odo,
                sodienthoai,
                cccd,
                biensoxe,
                thoigianketthuc:`${thoigianketthuc}:00 GMT+0700`,
                thoigianbatdau:`${thoigianbatdau}:00 GMT+0700`,
                nhanvien
            })

            resolve({
                errCode: 0,
                errMessage: 'Created at khach vang lai'
            })
        } catch (error) {
            reject(error)
        }
    })

    return promise
}
module.exports = {
    createKVL
}