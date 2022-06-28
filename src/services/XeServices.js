import sequelize from 'sequelize';
import db from '../models/index'
const Op = sequelize.Op;
// const operatorsAliases = {
//   $like: Op.like,
//   $not: Op.not
// }
let getAllXeByPhone = async ({thanhvien, biensoxe='', loaixe}) => {
    console.log(thanhvien, biensoxe, loaixe)
    const promise = new  Promise(async (resolve, reject) => {
        try {
            const info = await db.Xe.findAll({
                    attributes: ['biensoxe', 'loaixe'],
                    raw: true,
                    where: {
                        thanhvien,
                        biensoxe: {
                            [Op.like]: `%${biensoxe}%`
                        },
                        loaixe: {
                            [Op.like]: `%${loaixe}%`
                        },
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

module.exports = {
    getAllXeByPhone
}
