const { Router } = require("express");
const router = Router();
const authCtrl = require("../controllers/auth.controller");

router.get("/login", authCtrl.logIn);
router.post("/signin", authCtrl.signIn);
router.post("/signup", authCtrl.signUp);
router.post("/logout", authCtrl.logOut);

module.exports = router;
