import KhudoServices from "../services/KhudoServices"

let displayAllKhudo = async (req, res) => {
    const data = await KhudoServices.getAllKhudo(req.params)
    console.log(data)
    return res.send(data)
}

module.exports = {
    displayAllKhudo
}