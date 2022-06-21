import db from '../models/index'
const { QueryTypes } = require('sequelize')
let getAllThongbao = () => {
    const promise = new Promise(async function (resolve, reject) {
        try {
            let thongbao = await db.Thongbao.findAll({
                raw: true
            })
            resolve(thongbao)
        } catch (error) {
            reject(error)
        }
    });

    return promise
}

let createThongBao = ({ nguoidang, tieude, noidung, ...doituongnhan }) => {
    const promise = new Promise(async function (resolve, reject) {
        var curDate = new Date();
        let arr = Object.keys(doituongnhan)
        try {
            let response = await db.Thongbao.create({
                nguoidang,
                tieude,
                noidung,
                ngaydang: curDate
            })


            const id = await db.sequelize.query('select id from "Thongbaos" order by id desc limit 1 ', { type: QueryTypes.SELECT })
            
            arr.map(async (doituong, index) => {
                await db.sequelize.query(`insert into "Doituongnhantbs" values(${id[0].id}, ${+doituong})`)
            })

            resolve({
                errCode: 0,
                errMessage: 'Created at Thongbao'
            })
        } catch (error) {
            reject(error)
        }
    })
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
//2. Edit nội dung thông báo
const putNotification = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let notificationNew = await db.Thongbao.findOne({
                where: { id: data.id }
            })

            if (notificationNew) {
                notificationNew.tieude = data.tieude;
                notificationNew.noidung = data.noidung;

                await notificationNew.save();
                let getAllNotification = db.Thongbao.findAll()
                resolve(getAllNotification);
            }
            else {
                resolve();
            }
        } catch (error) {
            console.log(error)
        }
    })
}
module.exports = {
    getAllThongbao,
    createThongBao,
    deleteNotification,
    getNotification,
    putNotification
}