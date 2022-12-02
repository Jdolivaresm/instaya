const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ordersSchema = new Schema({
    id :{
        type: Number,
        required: [true,"por favor digite un consecutivo"]
     },

	 data: {
		type: year,
        min: 868,
		required: [true, "por favor digite la feha de ingreso"]
	},
    data: {
		type: year,
        min: 868,
		required: [true, "por favor digite la feha de entrega"]
	},
collection: 'orders'
 
})

module.exports = mongoose.model("orders", ordersSchema);