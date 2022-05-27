import db from '../models/index'

let getAllOdo = () => {
    const promise = new Promise( async function(resolve, reject) {
        try {
            let odo = await db.Odo.findAll({
                raw: true
            })
            resolve(odo)
        } catch (error) {
            reject(error)
        }
    });

    promise
        .then(function(data) {
            console.log(data)
        }) 
        .catch(function(error) {
            console.log(error)
        });

    return promise;
}

module.exports = {
    getAllOdo
}