import express from "express";
import homeController from "../controllers/homeController"
let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/all/body/avc', homeController.getHomePage)
    router.get('/all-odo', homeController.displayAllOdo)

    return app.use("/", router)
}

module.exports = initWebRoutes