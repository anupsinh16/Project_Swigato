const OrdersModel = require("../models/Orders");
const jwt = require("jsonwebtoken");

const OrdersData = async(req,res) => {
    const {items, OrderByUserID, TotalPrice} = req.body;

    const order = new OrdersModel({
        items : items,
        OrderByUserID : OrderByUserID,
        TotalPrice : TotalPrice,
    });

    const savedOrder = await order.save();

    const token = jwt.sign({orderId : savedOrder._id},"randomsecret");

    return res.status(200).json({
        token : token,
        order : savedOrder,
    });

};

module.exports = {
    OrdersData,
};

