import express from "express";
import homeController from "../controllers/homeController"
let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/all-odo', homeController.displayAllOdo)
    router.get('/all-odo/:makhudo', homeController.displayAllOdoById)
    return app.use("/", router)
}

export default initWebRoutes