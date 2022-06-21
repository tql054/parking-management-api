import XeServices from '../services/XeServices'

let displayAllXeByPhone = async (req, res) => {
    const data = await XeServices.getAllXeByPhone(req.params)
    return res.send(data)
}

module.exports = {
    displayAllXeByPhone
}