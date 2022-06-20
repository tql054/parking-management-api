import db from '../models/index'
const { Op } = require("sequelize");
let getAllKhudo = ({loaiKhuDo}) => {
    
    const promise = new Promise( async function(resolve, reject) {
        try {
            let khudo = await db.Khudo.findAll({
                attributes: {
                    exclude: ['id']
                },
                where: {
                    makhudo: {
                        [Op.like]: `%${loaiKhuDo}%`
                      }
                },
                raw: true
            })
            resolve(khudo)
        } catch (error) {
            reject(error)
        }
    });

    return promise
}



module.exports = {
    getAllKhudo
}