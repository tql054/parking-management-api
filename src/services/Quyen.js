import db from '../models/index'

let getAllQuyen = () => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            let quyen = await db.Quyen.findAll({
                raw: true
            })
            resolve(quyen)
        } catch (error) {
            reject(error)
        }
    });

    return promise
}



module.exports = {
    getAllQuyen
}