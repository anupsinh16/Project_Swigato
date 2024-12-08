const mongoose = require("mongoose");

const OrdersModel = mongoose.model("orders",{
    items : {type : Object, required : true},
    OrderByUserID : {type : String, required: true},
    TotalPrice : {type : Number, required : true},
});

module.exports = OrdersModel;
