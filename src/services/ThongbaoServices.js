import db from '../models/index'
const { QueryTypes } = require('sequelize')
// let getAllThongbao = () => {
//     const promise = new Promise(async function (resolve, reject) {
//         try {
//             let thongbao = await db.Thongbao.findAll({
//                 raw: true
//             })
//             resolve(thongbao)
//         } catch (error) {
//             reject(error)
//         }
//     });

//     return promise
// }

let getAllThongbao = ({ right }) => {
    const promise = new Promise(async function (resolve, reject) {
        try {
            if (right == 1) {
                // let thongbao = await db.Thongbao.findAll({
                //     raw: true
                // })
                let thongbao = await db.sequelize.query('select * from "Thongbaos"', { type: QueryTypes.SELECT })
                resolve(thongbao)
            }
            else {
                let thongbao = await db.sequelize.query(`select * from "Thongbaos" , "Doituongnhantbs" where id = mathongbao and maquyen = ${right}`, { type: QueryTypes.SELECT })
                resolve(thongbao)
            }
        } catch (error) {
            reject(error)
        }
    });

    return promise
}

//test
let getDoiTuong = () => {
    const promise = new Promise(async function (resolve, reject) {
        try {
            const nguoinhan = await db.sequelize.query('select * from "Doituongnhantbs"', { type: QueryTypes.SELECT })
            resolve(nguoinhan)
        } catch (error) {
            reject(error)
        }
    });

    return promise
}


let createThongBao = (data) => {
    const promise = new Promise(async function (resolve, reject) {
        var curDate = new Date();
        let arr = data.nguoinhan
        try {
            await db.Thongbao.create({
                tieude: data.tieude,
                noidung: data.noidung,
                nguoidang : data.nguoidang,
                ngaydang: curDate
            })

            const id = await db.sequelize.query('select id from "Thongbaos" order by id desc limit 1 ', { type: QueryTypes.SELECT })

            if (arr.length >= 2) {
                arr.map(async (doituong, index) => {
                    await db.sequelize.query(`insert into "Doituongnhantbs" values(${id[0].id}, ${doituong})`)
                })
            }
            else {
                await db.sequelize.query(`insert into "Doituongnhantbs" values(${id[0].id}, ${arr})`)
            }

            resolve({
                errCode: 0,
                errMessage: 'Created at Thongbao'
            })
        } catch (error) {
            reject(error)
        }
    })

    return promise;
}

//function delete notification by id
let deleteNotification = ({ id }) => {
    return new Promise(async (resolve, reject) => {
        let notification = await db.Thongbao.findOne({
            where: { id: id }
        })

        if (!notification) {
            resolve({
                errCode: 2,
                errMessage: 'Id notification is not exist'
            })
        }
        if (notification) {
            await notification.destroy();
        }

        resolve({
            errCCode: 0,
            message: "Notification is deleted"
        })
    })
}

//edit notification
//1. Lấy nội dung thông báo thông qua id
const getNotification = ({ id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            //Lấy tiêu đề và nội dung thông báo
            let notification = await db.Thongbao.findOne({
                where: { id: id },
                raw: true
            })

            if (notification) {
                resolve(notification)
            }
            else {
                resolve({})
            }
        } catch (error) {
            reject(error)
        }

    })
}

//Lấy maquyen qua mã thông báo
let getMaQuyenById = async ({ id }) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Lấy mã quyền theo mã thông báo
            const maquyen = await db.sequelize.query(`select maquyen from "Doituongnhantbs" where mathongbao = ${id}  `, { type: QueryTypes.SELECT })

            if (maquyen) {
                resolve(maquyen)
            }
            else {
                resolve({})
            }
        } catch (error) {
            reject(error)
        }
    })
}
//2. Edit nội dung thông báo
const putNotification = (data) => {
    return new Promise(async (resolve, reject) => {
        let arr = data.nguoinhan;
        if (arr.length >= 2) {
            arr = arr.split(",")
        }
        else {
            arr = Object.values(arr)
        }
        console.log(typeof arr)
        try {
            let notification = await db.Thongbao.findOne({
                where: { id: data.id }
            })
            //Update tieude & noidung thong bao
            if (notification) {
                notification.tieude = data.tieude
                notification.noidung = data.noidung
                await notification.save();
            }

            // let doituongnhan = await db.sequelize.query(`select * from "Doituongnhantbs" where mathongbao = ${data.id} `, { type: QueryTypes.SELECT })

            //Xóa tất cả mathongbao trong table doituongnhantb
            await db.sequelize.query(`delete from "Doituongnhantbs" where mathongbao = ${data.id}`)

            if (arr.length >= 2) {
                arr.map(async item => {
                    await db.sequelize.query(`insert into "Doituongnhantbs" values(${data.id}, ${item})`)
                })
            }
            else {
                await db.sequelize.query(`insert into "Doituongnhantbs" values(${data.id}, ${arr[0]})`)
            }


            resolve({
                errCode: 0,
                errMessage: 'Created at Thongbao'
            })
        } catch (error) {
            reject(error)
        }
    })
}
// const putNotification = (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let notificationNew = await db.Thongbao.findOne({
//                 where: { id: data.id }
//             })
//             let doituongnhanNew = await db.Doituongnhantb.findOne({
//                 where: { id: data.id }
//             })
//             if (notificationNew && doituongnhan) {
//                 notificationNew.tieude = data.tieude;
//                 notificationNew.noidung = data.noidung;

//                 if (doituongnhanNew.length >= 2) 


//                 await notificationNew.save();
//                 // let getAllNotification = db.Thongbao.findAll()
//                 // resolve(getAllNotification);
//             }
//             else {
//                 resolve();
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     })
// }
module.exports = {
    getAllThongbao,
    createThongBao,
    deleteNotification,
    getNotification,
    putNotification,
    getDoiTuong,
    getMaQuyenById
}