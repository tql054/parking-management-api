import Quyen from '../services/Quyen'

let getAllQuyen = async (req, res) => {
    const data = await Quyen.getAllQuyen()
    console.log(data)
    return res.send(data)
}

module.exports = {
    getAllQuyen
}