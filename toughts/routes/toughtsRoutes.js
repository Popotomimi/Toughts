const express = require("express");
const router = express.Router();
const ToughtController = require("../controllers/ToughtController.js");

router.get("/", ToughtController.showToughts);

module.exports = router;
