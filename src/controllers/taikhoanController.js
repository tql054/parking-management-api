import TaikhoanServices from '../services/TaikhoanServices'

const getInfoAccount = async (req, res) => {
    let response = []
    try {
        switch(req.params.right) {
            case '1': {
                response = await TaikhoanServices.getInfoQuanly(req.params.phone)
                break
            }

            case '2': {
                response = await TaikhoanServices.getInfoNhanVien(req.params.phone)
                break
            }

            case '3': {
                response = await TaikhoanServices.getInfoThanhvien(req.params.phone)
                break
            }
        }
        console.log(response)
        return res.send(response)
    } catch (e) {
        return res.status(500).json({
            errCode: 5,
            message: 'Error from server: '+e
        })
    }
} 

module.exports = {
    getInfoAccount
}