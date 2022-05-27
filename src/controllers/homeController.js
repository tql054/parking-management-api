import OdoServices from '../services/OdoServices'
let getHomePage = (req, res) => {
    return res.render('homepage.ejs')
}

let displayAllOdo = async (req, res) => {
    const data = await OdoServices.getAllOdo()
    return res.send(data)
}

module.exports = {
    getHomePage,
    displayAllOdo
}
