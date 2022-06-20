
import db, { sequelize } from '../models/index'
const { QueryTypes } = require('sequelize');
let getAllOdo = () => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            let odo = await db.Odo.findAll({
                attributes: ['tenodo', 'makhudo', 'trangthai'],
                raw: true
            })
            resolve(odo)
        } catch (error) {
            reject(error)
        }
    });

    // promise
    //     .then(function(data) {
    //         console.log(data)
    //     }) 
    //     .catch(function(error) {
    //         console.log(error)
    //     });

    return promise;
}

let getAllOdoById = ({ makhudo }) => {
    const promise = new Promise(async function(resolve, reject) {
        try {
            let odos = await db.Odo.findAll( {
                    attributes: {
                        include: ['tenodo', 'makhudo', 'trangthai'], 
                        exclude: ['id', 'KhudoId']
                    },
                    where: {
                        makhudo
                    },
                    raw: true
                }
            )
            resolve(odos)
        } catch (error) {
            reject(error)
        }   
    })

    return promise
}

let getAllOdoThanhvien = (makhudo, {dateBegin, dateEnd}) => {
    console.log(dateBegin)
    console.log(dateEnd)

    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select tenodo, makhudo, d.id, d.thoigianketthuc,thoigiankethucthuc, ttthanhtoan
                            from "Odos" o , "Dangkythanhviens" d 
                            where o.tenodo  = d.odo and 
                            d.thoigianketthuc between '${dateBegin} +0700' and '${dateEnd} +0700' and 
                            makhudo = '${makhudo}' and 
                            d.thoigiankethucthuc is null
                            order by d.thoigiankethucthuc desc`
            const odo =  await db.sequelize.query(
                query
                ,{ type: QueryTypes.SELECT }
            )

            resolve(odo)
        } catch (error) {
            reject(error)
        }
    })

    return promise
}

const getAllOdoVanglai = (makhudo, {dateBegin, dateEnd}) => {

    const promise = new Promise( async function(resolve, reject)  {
        try {
            const query =   `select	tenodo, k.makhudo, d.id, d.thoigianketthuc
                            from 	"Odos" o , "Dangkyvanglais" d, "Khudos" k 
                            where 	o.tenodo  = d.odo and 
                                    o.makhudo = k.makhudo and
                                    d.thoigiankethucthuc is null and
                                    d.thoigianketthuc between '${dateBegin} +0700' and '${dateEnd} +0700' and 
                                    o.makhudo = '${makhudo}'
                            order by d.thoigiankethucthuc desc`
            const odo = await db.sequelize.query(query,{type: QueryTypes.SELECT})

            resolve(odo)
        } catch(err) {
            console.log(err)
        }
    })

    return promise
}


module.exports = {
    getAllOdo,
    getAllOdoById,
    getAllOdoThanhvien,
    getAllOdoVanglai
}