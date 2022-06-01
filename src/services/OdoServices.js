
import db from '../models/index'

let getAllOdo = () => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            let odo = await db.Odo.findAll({
                attributes: ['tenodo', 'makhudo'],
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

module.exports = {
    getAllOdo,
    getAllOdoById
}