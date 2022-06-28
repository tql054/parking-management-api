import LoginService from '../services/LoginService'

const handleUserLogin = async function(req, res) {
    try {   
        let userPhone = req.body.phone
        let userPassword = req.body.password
        console.log(req.body)
        if(userPhone && userPassword) {
            let userData = await LoginService.handleLogin(userPhone, userPassword)
            return res.status(200).json({
                ...userData
            })
        }
        return res.status(200).json({
            errCode: 5,
            message: "Thiếu dữ liệu đăng nhập"
        })

    } catch(e) {
        return res.status(500).json({
            errCode: 4,
            message: `Error from server: ${e}`
        })
    }
}

const checkUserPhone = async function(req, res) {
    try {
        const response = await LoginService.checkUserPhone(req.params.phone)
        console.log(response, 123)
        if(response) {
            return res.status(200).json({
                errCode: 0,
                message: ''
            })
        } else {
            return res.status(200).json({
                errCode: 1,
                message: 'Số điện thoại chưa được đăng ký'
            })
        }

    }  catch(e) {
        return res.status(500).json({
            errCode: 4,
            message: `Error from server: ${e}`
        })
    }
}

const displayAllUser = async function(req, res) {
    try {
        const data = await LoginService.getAllUser()
        return res.send(data)
    } catch (e) {
        return res.status(500).json({
            errCode: 4,
            message: `Error from server: ${e}`
        })
    }
}

module.exports = {
    handleUserLogin,
    checkUserPhone,
    displayAllUser
}