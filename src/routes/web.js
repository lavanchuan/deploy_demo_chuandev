import express from "express";

import homeController from "../controllers/HomeController";

let router = express.Router();

let initWebRoutes = (app) => {
    // router.get("/", (req, res) => {
    //     return res.send('Hello world');
    // });

    router.get("/", homeController.getHomepage);

    // webhook
    router.post("/webhook", homeController.postWebhook);
    router.get("/webhook", homeController.getWebhook);

    return app.use("/", router); // trả về các route của app
}

module.exports = initWebRoutes;