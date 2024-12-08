const express = require("express");

const router = express.Router();

const { sendDishes } = require("../controllers/dishesController");

/**
 * @openapi
 * /api/dishes:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */


router.get("/dishes", sendDishes);

module.exports = router;
