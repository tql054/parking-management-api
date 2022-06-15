import LoaixeServices from '../services/LoaixeServices'

let displayAllLoaixe = async (req, res) => {
    const data = await LoaixeServices.getAllLoaixe()
    return res.send(data)
}

module.exports = {
    displayAllLoaixe
}