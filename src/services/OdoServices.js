
import db from '../models/index'
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
                        makhudo: makhudo
                    },
                    raw: true
                }
            )
            console.log(odos)
            resolve(odos)
        } catch (error) {
            reject(error)
        }
    })

    return promise
}

let getAllOdoByDate = (makhudo, {timeBegin, dateBegin, timeEnd, dateEnd}) => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            const query =   `select tenodo, makhudo, d.thoigianketthuc 
                            from "Odos" o , "Dangkythanhviens" d 
                            where o.tenodo  = d.odo and 
                            d.thoigianketthuc between '${dateBegin} ${timeBegin} +0700' and '${dateEnd} ${timeEnd} +0700' and 
                            makhudo = '${makhudo}'`
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
    getAllOdo,
    getAllOdoById,
    getAllOdoByDate
}