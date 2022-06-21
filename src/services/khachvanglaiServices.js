import db from '../models/index'

let createKVL = (data) => {
    const promise = new Promise(async function (resolve, reject) {
        var curDate = new Date();
        var curDay = curDate.getDate();
        try {
            await db.Dangkyvanglai.create({
                hovaten: data.hovaten,
                odo: data.odo,
                sodienthoai: data.sodienthoai,
                cccd: data.cccd,
                biensoxe: data.biensoxe,
                thoigianketthuc: data.thoigianketthuc,
                thoigianbatdau: data.thoigianbatdau,
            })

            resolve({
                errCode: 0,
                errMessage: 'Created at khach vang lai'
            })
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    createKVL
}