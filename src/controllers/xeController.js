import XeServices from '../services/XeServices'

let displayAllXeByPhone = async (req, res) => {
    const data = await XeServices.getAllXeByPhone(req.params)
    console.log(data)
    return res.send(data)
}

module.exports = {
    displayAllXeByPhone
}