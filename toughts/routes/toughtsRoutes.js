const express = require("express");
const router = express.Router();
const ToughtController = require("../controllers/ToughtController.js");

// Helpers
const checkAuth = require("../helpers/auth.js").checkAuth;

router.get("/add", checkAuth, ToughtController.createTought);
router.post("/add", checkAuth, ToughtController.createToughtSave);
router.get("/dashboard", checkAuth, ToughtController.dashboard);
router.post("/remove", checkAuth, ToughtController.removeTought);
router.get("/", ToughtController.showToughts);

module.exports = router;
