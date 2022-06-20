import express from "express";
import homeController from "../controllers/homeController"
import thongbaoController from "../controllers/thongbaoController"
import quyenController from "../controllers/quyenController"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/all-odo', homeController.displayAllOdo)
    router.get('/all-odo/:makhudo', homeController.displayAllOdoById)

    // Thong bao api
    router.get('/thongbao', thongbaoController.getAllThongBao)
    router.post('/create-thongbao', thongbaoController.postThongBao)
    router.delete('/delete-thongbao/:id', thongbaoController.deleteThongBao) //Xóa thông báo thông qua id
    router.get('/edit-thongbao/:id', thongbaoController.getThongBao) //Lấy nội dung của thông báo cần sửa thông qua id
    router.post('/put-thongbao', thongbaoController.putThongBao) //Sửa thông báo

    // Quyen api
    router.get('/quyen', quyenController.getAllQuyen)

    return app.use("/", router)
}

export default initWebRoutes