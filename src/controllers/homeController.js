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

let displayAllOdoByDate = async (req, res) => {
    const {makhudo} = req.params
    console.log(req.body)
    const data = await OdoServices.getAllOdoByDate(makhudo, req.query)
    return res.send(data)
}

module.exports = {
    getHomePage,
    displayAllOdo,
    displayAllOdoById,
    displayAllOdoByDate
}
