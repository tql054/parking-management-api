import db from '../models/index'
const { QueryTypes } = require('sequelize');
let getDangkyTV = ({ loaixe='' }) => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select tenodo, makhudo, dk.trangthai, dk.id, thoigianbatdau, dk.biensoxe, thoigianketthuc, 
                            thoigiankethucthuc, xe.loaixe, hoten, sodienthoai 
                            from "Odos" o, "Dangkythanhviens" dk, "Xes" xe, "Thanhviens" tv 
                            where o.tenodo  = dk.odo and 
                            xe.biensoxe = dk.biensoxe and 
                            xe.thanhvien = tv.sodienthoai and 
                            xe.loaixe like'%%' and 
                            dk.trangthai like '%%'      
                            Order by thoigianketthuc desc`
            resolve(await db.sequelize.query(
                query
                ,{ type: QueryTypes.SELECT }
            ))
        } catch (error) {
            reject(error)
        }
    })

    return promise
}

let getDangkyVL = () => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `Select tenodo,biensoxe,sodienthoai,thoigianbatdau,thoigianketthuc, k.makhudo, k.loaixe 
                            from "Dangkyvanglais" d ,"Odos" o, "Khudos" k 
                            where d.odo = o.tenodo and o.makhudo = k.makhudo `
            resolve(await db.sequelize.query(
                query
                ,{ type: QueryTypes.SELECT }
            ))
        } catch (error) {
            reject(error)
        }
    })

    return promise
}

let getDangkyTVByName = ({ searchKey='', loaixe='', thutu='asc', dangky, tinhtrang='', ngaydang, ngayBD, ngayKT }) => {
    let filterNgaydang = ''
    if(ngaydang==='false') {
        filterNgaydang = `and Date(thoigianbatdau) between '${ngayBD}' and '${ngayKT}' `
    }
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select tenodo, makhudo, dk.trangthai, dk.id, thoigianbatdau, dk.biensoxe, thoigianketthuc, 
                            thoigiankethucthuc, xe.loaixe, hoten, sodienthoai 
                            from "Odos" o, "Dangkythanhviens" dk, "Xes" xe, "Thanhviens" tv 
                            where o.tenodo  = dk.odo and 
                            xe.biensoxe = dk.biensoxe and 
                            xe.thanhvien = tv.sodienthoai and 
                            hoten like '%${searchKey}%' and 
                            xe.loaixe like '%${loaixe}%' and 
                            dk.trangthai like '%${tinhtrang}%' ${filterNgaydang} 
                            Order by thoigianketthuc desc`
                            
            resolve(await db.sequelize.query(
                query
                ,{ type: QueryTypes.SELECT }
            ))
        } catch (error) {
            reject(error)
        }
    })

    return promise
}

let getDangkyTVByPhone = ({ searchKey='', loaixe='', thutu='asc', dangky, tinhtrang='', ngaydang, ngayBD, ngayKT }) => {
    let filterNgaydang = ''
    if(ngaydang==='false') {
        filterNgaydang = `and Date(thoigianbatdau) between '${ngayBD}' and '${ngayKT}' `
    }
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select tenodo, makhudo, dk.trangthai, dk.id, thoigianbatdau, dk.biensoxe, thoigianketthuc, 
                            thoigiankethucthuc, xe.loaixe, hoten, sodienthoai 
                            from "Odos" o, "Dangkythanhviens" dk, "Xes" xe, "Thanhviens" tv 
                            where o.tenodo  = dk.odo and 
                            xe.biensoxe = dk.biensoxe and 
                            xe.thanhvien = tv.sodienthoai and 
                            sodienthoai like '%${searchKey}%' and 
                            xe.loaixe like '%${loaixe}%' and 
                            dk.trangthai like '%${tinhtrang}%' ${filterNgaydang} 
                            Order by thoigianketthuc desc`
            resolve(await db.sequelize.query(
                query
                ,{ type: QueryTypes.SELECT }
            ))
        } catch (error) {
            reject(error)
        }
    })

    return promise
}


let getDangkyTVByNumber = ({ searchKey='', loaixe='', thutu='asc', dangky, tinhtrang='', ngaydang, ngayBD, ngayKT }) => {
    let filterNgaydang = ''
    if(ngaydang==='false') {
        filterNgaydang = `and Date(thoigianbatdau) between '${ngayBD}' and '${ngayKT}' `
    }
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select tenodo, makhudo, dk.trangthai, dk.id, dk.biensoxe, thoigianbatdau, thoigianketthuc, 
                            thoigiankethucthuc, xe.loaixe, hoten, sodienthoai 
                            from "Odos" o, "Dangkythanhviens" dk, "Xes" xe, "Thanhviens" tv 
                            where o.tenodo  = dk.odo and 
                            xe.biensoxe = dk.biensoxe and 
                            xe.thanhvien = tv.sodienthoai and 
                            dk.biensoxe like '%${searchKey}%' and 
                            xe.loaixe like '%${loaixe}%' and 
                            dk.trangthai like '%${tinhtrang}%' ${filterNgaydang}     
                            Order by thoigianketthuc desc`
            resolve(await db.sequelize.query(
                query
                ,{ type: QueryTypes.SELECT }
            ))
        } catch (error) {
            reject(error)
        }
    })

    return promise
}

module.exports = {
    getDangkyTV,
    getDangkyTVByName,
    getDangkyTVByPhone,
    getDangkyTVByNumber,
    getDangkyVL
}