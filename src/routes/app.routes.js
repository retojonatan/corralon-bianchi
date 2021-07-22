const { Router } = require("express");
const verifyToken = require("../middlewares/verifyToken");
const router = Router();
const dashboardCtrl = require("../controllers/dashboard.controller");
const clientRoutes = require("./clients.routes");
const authRoutes = require("./auth.routes");

router.use(clientRoutes);
router.use(authRoutes);
//router.use(userRoutes);
//router.use(productRoutes);
//router.use(saleRoutes);
//router.use(provRoutes);
//router.use(buyRoutes);
router.get("/", dashboardCtrl.dashboard);
router.get("/dashboard", dashboardCtrl.dashboard);

//MIDDLEWARE TOKEN
router.use(verifyToken);

module.exports = router;
