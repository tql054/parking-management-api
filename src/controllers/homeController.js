import OdoServices from '../services/OdoServices'
let getHomePage = (req, res) => {
    console.log(req)
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
