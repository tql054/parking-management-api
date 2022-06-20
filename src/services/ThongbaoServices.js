import db from '../models/index'

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

let createThongBao = (data) => {
    const promise = new Promise(async function (resolve, reject) {
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
const getNotification = ({id}) => {
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