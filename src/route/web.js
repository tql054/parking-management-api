import express from "express";
import homeController from "../controllers/homeController"
import thongbaoController from "../controllers/thongbaoController"
import quyenController from "../controllers/quyenController"
import dangkyController from "../controllers/dangkyController"
import loaixeController from "../controllers/loaixeController"
import khudoController from "../controllers/khudoController"
import xeController from "../controllers/xeController"


let router = express.Router()

let initWebRoutes = (app) => {
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
    router.get('/list-xe/:thanhvien', xeController.displayAllXeByPhone)

    //Loaixe api
    router.get('/loaixe', loaixeController.displayAllLoaixe)


    return app.use("/", router)
}

export default initWebRoutes