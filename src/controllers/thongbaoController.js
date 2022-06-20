import ThongbaoServices from '../services/ThongbaoServices';

let getAllThongBao = async (req, res) => {
    const data = await ThongbaoServices.getAllThongbao()
    console.log(data)
    return res.send(data)
}

let postThongBao = async (req, res) => {
    try {
        let response =  await ThongbaoServices.createThongBao(req.body)
        return res.status(200).json(response)
    } catch(e) {
        console.log(e)
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}

module.exports = {
    getAllThongBao,
    postThongBao
}