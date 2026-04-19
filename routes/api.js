const express = require("express");
const router = express.Router();

const { getMessage } = require("../controllers/mainController");

router.get("/message", getMessage);

module.exports = router;
