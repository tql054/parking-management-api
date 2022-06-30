import db from '../models/index'
const { QueryTypes} = require('sequelize');
let getDangkyTV = () => {
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
            const query =   `Select tenodo,biensoxe,sodienthoai,thoigianbatdau,thoigianketthuc,thoigiankethucthuc, k.makhudo, k.loaixe, hoten
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

let getDangkyTVByName = ({ searchKey='', loaixe='', tinhtrang='', ngaydang, ngayBD, ngayKT, limit=10 }) => {
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
                            ttthanhtoan = 'Đã thanh toán' and
                            hoten like '%${searchKey}%' ${filterNgaydang} and
                            xe.loaixe like '%${loaixe}%'   
                            Order by thoigianketthuc desc
                            limit ${limit}`
                            
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

let getDangkyVLByName = ({ searchKey='', loaixe='', ngaydang, ngayBD, ngayKT, limit=10 }) => {
    let filterNgaydang = ''
    if(ngaydang==='false') {
        filterNgaydang = `and Date(thoigianbatdau) between '${ngayBD}' and '${ngayKT}' `
    }
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select  tenodo, o.makhudo, dk.id, dk.biensoxe, thoigianbatdau, thoigianketthuc, 
                            thoigiankethucthuc, k.loaixe, sodienthoai, dk.hoten
                            from "Odos" o, "Dangkyvanglais" dk, "Khudos" k 
                            where 	o.tenodo  = dk.odo and 
                                    dk.odo = o.tenodo and
                                    o.makhudo = k.makhudo and 
                                    dk.hoten like '%${searchKey}%' and 
                                    k.loaixe like '%${loaixe}%' ${filterNgaydang}    
                            Order by thoigianketthuc desc
                            limit ${limit}`
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

let getDangkyTVByPhone = ({ searchKey='', loaixe='',tinhtrang='', ngaydang, ngayBD, ngayKT, limit=10 }) => {
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
                            Order by thoigianketthuc desc
                            limit ${limit}`
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


let getDangkyTVByNumber = ({ searchKey='', loaixe='', tinhtrang='', ngaydang, ngayBD, ngayKT, limit=10 }) => {
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
                            Order by thoigianketthuc desc
                            limit ${limit}`
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

let getDangkyVLByNumber = ({ searchKey='', loaixe='', ngaydang, ngayBD, ngayKT, limit=10 }) => {
    let filterNgaydang = ''
    if(ngaydang==='false') {
        filterNgaydang = `and Date(thoigianbatdau) between '${ngayBD}' and '${ngayKT}' `
    }
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select  tenodo, o.makhudo, dk.id, dk.biensoxe, thoigianbatdau, thoigianketthuc, 
                            thoigiankethucthuc, k.loaixe, sodienthoai, dk.hoten
                            from "Odos" o, "Dangkyvanglais" dk, "Khudos" k 
                            where 	o.tenodo  = dk.odo and 
                                    dk.odo = o.tenodo and
                                    o.makhudo = k.makhudo and 
                                    dk.biensoxe like '%${searchKey}%' and 
                                    k.loaixe like '%${loaixe}%' ${filterNgaydang}    
                            Order by thoigianketthuc desc
                            limit ${limit}`
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

let getDangkyVLByPhone = ({ searchKey='', loaixe='', ngaydang, ngayBD, ngayKT, limit=10 }) => {
    let filterNgaydang = ''
    if(ngaydang==='false') {
        filterNgaydang = `and Date(thoigianbatdau) between '${ngayBD}' and '${ngayKT}' `
    }
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select  tenodo, o.makhudo, dk.id, dk.biensoxe, thoigianbatdau, thoigianketthuc, 
                            thoigiankethucthuc, k.loaixe, sodienthoai, dk.hoten 
                            from "Odos" o, "Dangkyvanglais" dk, "Khudos" k 
                            where 	o.tenodo  = dk.odo and 
                                    dk.odo = o.tenodo and
                                    o.makhudo = k.makhudo and 
                                    dk.sodienthoai like '%${searchKey}%' and 
                                    k.loaixe like '%${loaixe}%' ${filterNgaydang}    
                            Order by thoigianketthuc desc
                            limit ${limit}`
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

let getDangkyTVByID = ({id}) => {
    const promise = new  Promise( async (resolve, reject) => {
        try {
            const info = await db.sequelize.query(
                `select  odo, hoten, sodienthoai, cccd, d.biensoxe , thoigianbatdau , thoigianketthuc , trangthai, ttthanhtoan
                from "Dangkythanhviens" d, "Xes" x , "Thanhviens" t 
                where d.biensoxe = x.biensoxe and
                x.thanhvien = t.sodienthoai and
                d.id = ${id}`,
                {type: QueryTypes.SELECT}
            )
            
            resolve(info)
        } catch(e) {        
            resolve(e)
        }
    })

    return promise
}

let getDangkyVLByID = ({id}) => {
    const promise = new  Promise(async (resolve, reject) => {
        try {
            const info = await db.Dangkyvanglai.findOne({
                    raw: true,
                    where: {
                        id
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

let checkoutDangkyTV = async (id, {isPunished=false}) =>  {
    console.log(id, isPunished)
    const now = new Date()
    const promise = new Promise(async function(resolve, reject){
        try {
            const response = await db.Dangkythanhvien.update(
                { thoigiankethucthuc: now },
                { where: { id } }
            )

            if(isPunished) {
                // const penalt = await db.Dangkyvipham.create({
                //         madangky: +id,
                //         madmvp: 1
                //     }, { fields: ['madangky','madmvp'] } 
                // )
                const now = new Date()
                const date = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} 
                ${now.getHours()}:00 +0700`
                const penalt = await db.sequelize.query(
                    `Insert into "Dangkyviphams" ("madangky", "madmvp", "createdAt", "updatedAt")
                    values (${+id}, ${1}, '${date}', '${date}')`
                    ,{ type: QueryTypes.INSERT })
            }
            resolve( {
                errCode: 0,
                errMessage: 'Checkout successfully!'
            })
        } catch (e) {
            reject(e)
        }
    })

    return promise
}

let checkoutDangkyVL = ({id}) =>  {
    const now = new Date()
    const promise = new Promise(async function(resolve, reject){
        try {
            const response = db.Dangkyvanglai.update(
                { thoigiankethucthuc: now },
                { where: { id } }
            )
            resolve( {
                errCode: 0,
                errMessage: 'Checkout successfully!'
            })
        } catch (e) {
            reject(e)
        }
    })

    return promise
}

let postDangkyTVByNV = ({biensoxe, dateBegin, dateEnd, odo}) => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            await db.Dangkythanhvien.create({
                biensoxe, thoigianketthuc: `${dateEnd}:00 GMT+0700`,
                thoigianbatdau:`${dateBegin}:00 GMT+0700`, odo, ttthanhtoan: "Đã thanh toán"
            })

            resolve( {
                errCode: 0,
                errMessage: 'Đăng ký ô đỗ thành công!'
            })
        } catch (error) {   
            reject(error)
        }
    } )

    return promise
}


module.exports = {
    getDangkyTV,
    getDangkyTVByName,
    getDangkyTVByPhone,
    getDangkyTVByNumber,
    getDangkyVL,
    getDangkyVLByName,
    getDangkyVLByPhone,
    getDangkyVLByNumber,
    getDangkyTVByID,
    getDangkyVLByID,
    checkoutDangkyTV,
    checkoutDangkyVL,
    postDangkyTVByNV
}