import db from '../models/index'

let createKVL = (data) => {
    const promise = new Promise(async function (resolve, reject) {

        try {
            await db.Dangkyvanglai.create({
                hoten: data.hovaten,
                odo: data.odo,
                sodienthoai: data.sodienthoai,
                cccd: data.cccd,
                biensoxe: data.biensoxe,
                thoigianketthuc:`${data.thoigianketthuc}:00 GMT+0700`,
                thoigianbatdau:`${data.thoigianbatdau}:00 GMT+0700`,
                nhanvien: '0935196473'
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