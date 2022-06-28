import express from "express";
import loginController from "../controllers/loginController"
import homeController from "../controllers/homeController"
import thongbaoController from "../controllers/thongbaoController"
import quyenController from "../controllers/quyenController"
import dangkyController from "../controllers/dangkyController"
import loaixeController from "../controllers/loaixeController"
import khudoController from "../controllers/khudoController"
import xeController from "../controllers/xeController"
import taikhoanController from "../controllers/taikhoanController"



import khachvanglaiController from '../controllers/khachvanglaiController'
let router = express.Router()

let initWebRoutes = (app) => {
    //login
    router.post('/login', loginController.handleUserLogin)
    router.post('/check-user/:phone',loginController.checkUserPhone)
    router.post('/check-user',loginController.checkUserPhone)
    router.get('/all-user', loginController.displayAllUser)
    //odo
    router.get('/', homeController.getHomePage)
    router.get('/all-odo', homeController.displayAllOdo)
    router.get('/all-odo/:makhudo', homeController.displayAllOdoById)
    router.get('/all-odo-bydate/:makhudo', homeController.displayAllOdoThanhvien)
    router.get('/all-odo-vanglai/:makhudo', homeController.displayAllOdoVanglai)

    // Khudo
    router.get('/all-khudo/:loaiKhuDo', khudoController.displayAllKhudo)

    // Thong bao api
    router.get('/thongbao', thongbaoController.getAllThongBao)
    router.post('/create-thongbao', thongbaoController.postThongBao)
    router.delete('/delete-thongbao/:id', thongbaoController.deleteThongBao) //Xóa thông báo thông qua id
    router.get('/edit-thongbao/:id', thongbaoController.getThongBao) //Lấy nội dung của thông báo cần sửa thông qua id
    // router.get('/get-maquyen/:id',thongbaoController.getMaQuyen) //lấy mã quyền của thông báo theo ma thông báo
    router.post('/put-thongbao', thongbaoController.putThongBao) //Sửa thông báo
    router.get('/doituong', thongbaoController.getAllDoiTuong)

    // Quyen api
    router.get('/quyen', quyenController.getAllQuyen)

    // Dangky api
    router.get('/dangkythanhvien/', dangkyController.displayDangkyTV)
    router.get('/dangkythanhvien/:type', dangkyController.displayDangkyTV)
    router.get('/dangkyvanglai', dangkyController.displayDangkyVL)
    router.get('/dangkyvanglai/:type', dangkyController.displayDangkyVL)
    router.get('/:option/', dangkyController.displayDangkyById)
    router.post('/checkoutDangkyKTV/:id', dangkyController.checkoutThanhvien)
    router.post('/checkoutDangkyKVL/:id', dangkyController.checkoutVanglai)
    router.post('/create-dangkythanvien', dangkyController.postDangkyTVByNV)

    //Xe api
    router.get('/list-xe/:thanhvien/:loaixe/:biensoxe', xeController.displayAllXeByPhone)
    router.get('/list-xe/:thanhvien/:loaixe', xeController.displayAllXeByPhone)


    //Loaixe api
    router.get('/loaixe', loaixeController.displayAllLoaixe)

    //Khach vang lai
    router.post('/create-khachvanglai', khachvanglaiController.postKVL)

    //thongtintaikhoan
    router.get('/getinfo/:right/:phone', taikhoanController.getInfoAccount)

    return app.use("/", router)
}

export default initWebRoutes