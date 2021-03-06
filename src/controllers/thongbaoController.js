import ThongbaoServices from '../services/ThongbaoServices';

let getAllThongBao = async (req, res) => {
    const data = await ThongbaoServices.getAllThongbao(req.params)
    console.log(data)
    return res.send(data)
}

//test doi tuong nhan
let getAllDoiTuong = async (req, res) => {
    const data = await ThongbaoServices.getDoiTuong()
    console.log(data)
    return res.send(data)
}

let postThongBao = async (req, res) => {
    try {
        let response = await ThongbaoServices.createThongBao(req.body)
        // return res.send(response)
        return res.redirect('http://localhost:3000/danhsachthongbao')
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}


//delete thông báo
let deleteThongBao = async (req, res) => {
    try {
        const data = await ThongbaoServices.deleteNotification(req.params)

        return res.send(data)
    } catch (e) {
        console.log(e)
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server: ' + e
        })
    }
}

//Lấy nội dugn 1 thông báo thông qua id
let getThongBao = async (req, res) => {
    try {
        let data = await ThongbaoServices.getNotification(req.params);
        return res.send(data);
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server: ' + error
        })
    }
}

// //Lấy maquyen của thông báo theo mathongbao
let getMaQuyen = async (req, res) => {
    try {
        let data = await ThongbaoServices.getMaQuyenById(req.params);
        return res.send(data)
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage : 'Error from server : '+ error
        })
    }
}

//Edit thông báo
let putThongBao = async (req, res) => {
    try {
        let data = await ThongbaoServices.putNotification(req.body);
        return res.redirect('http://localhost:3000/danhsachthongbao')
        // return res.send(data)
    } catch (error) {
        console.log(error)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server: ' + error
        })
    }
}

module.exports = {
    getAllThongBao,
    postThongBao,
    deleteThongBao,
    getThongBao,
    putThongBao,
    getAllDoiTuong,
    getMaQuyen
}