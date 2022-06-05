import db from '../models/index'

let getAllThongbao = () => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            let thongbao = await db.Thongbao.findAll({
                // attributes: {
                //     exclude: ['QuanlyId']
                // },
                raw: true
            })
            resolve(thongbao)
        } catch (error) {
            reject(error)
        }
    });

    return promise
}

let createThongBao = (data) => {
    const promise = new Promise( async function(resolve, reject) {
        var curDate = new Date();
        var curDay = curDate.getDate();
        try {
            await db.Thongbao.create({
                nguoidang: data.nguoidang,
                tieude: data.tieude,
                noidung: data.noidung,
                ngaydang: curDate,
                // QuanlyId: null
            })

            resolve( {
                errCode: 0,
                errMessage: 'Created at Thongbao'
            })
        } catch (error) {
            reject(error)
        }
    } )

    return promise
}



module.exports = {
    getAllThongbao,
    createThongBao
}