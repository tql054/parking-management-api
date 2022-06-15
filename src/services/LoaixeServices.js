import db from '../models/index'

let getAllLoaixe = () => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            let loaixe = await db.Loaixe.findAll({
                attributes: {
                    exclude: ['id']
                },
                raw: true
            })
            resolve(loaixe)
        } catch (error) {
            reject(error)
        }
    });

    return promise
}



module.exports = {
    getAllLoaixe
}