import express from "express";
import homeController from "../controllers/homeController"
import thongbaoController from "../controllers/thongbaoController"
import quyenController from "../controllers/quyenController"
import dangkyController from "../controllers/dangkyController"
import loaixeController from "../controllers/loaixeController"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/all-odo', homeController.displayAllOdo)
    router.get('/all-odo/:makhudo', homeController.displayAllOdoById)

    // Thong bao api
    router.get('/thongbao', thongbaoController.getAllThongBao)
    router.post('/create-thongbao', thongbaoController.postThongBao)

    // Quyen api
    router.get('/quyen', quyenController.getAllQuyen)

    // Dangky api
    router.get('/dangkythanhvien/:type', dangkyController.displayDangkyTV)
    router.get('/dangkyvanglai', dangkyController.displayDangkyVL)
    router.get('/dangkyvanglai/:type', dangkyController.displayDangkyVL)


    //Loaixe api
    router.get('/loaixe', loaixeController.displayAllLoaixe)


    return app.use("/", router)
}

export default initWebRoutes