const express = require("express");
const {OrdersData} = require("../controllers/ordersController");

const router = express.Router();

router.post("/orders",OrdersData);

module.exports = router ;

