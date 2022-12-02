const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
	id :{
       type: Number,
	   required: [true,"por favor digite un consecutivo"]
	},

	name: {
		type: String,
		required: [true, "el nombre es obligatorio"]
	},
	password: {
		type: password,
		required: [true, "la contraseña es obligatoria"]
	},
	correo: {
		type: String,
		required: [true, "el el correo es obligatoria"]
	},
	collection: 'user'
})

module.exports = mongoose.model("user", userSchema);