import OdoServices from '../services/OdoServices'
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let displayAllOdo = async (req, res) => {
    const data = await OdoServices.getAllOdo()
    return res.send(data)
}

let displayAllOdoById = async (req, res) => {
    const data = await OdoServices.getAllOdoById(req.params)
    return res.send(data)
}

let displayAllOdoThanhvien = async (req, res) => {
    const {makhudo} = req.params
    const data = await OdoServices.getAllOdoThanhvien(makhudo, req.query)
    return res.send(data)
}

let displayAllOdoVanglai = async (req, res) => {
    const {makhudo} = req.params
    try {
        let data = await OdoServices.getAllOdoVanglai(makhudo, req.query)
        return res.send(data)
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}

module.exports = {
    getHomePage,
    displayAllOdo,
    displayAllOdoById,
    displayAllOdoThanhvien,
    displayAllOdoVanglai
}
