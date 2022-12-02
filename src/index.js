import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
let Schema = mongoose.Schema;
let slideSchema = new Schema({
        image:{
          type:String,
          required:[true,"la imagen es obligatoria"]
        },
        titulo:{
          type:String,
          required:false
        },
        descripcion:{
          type:String,
          required:false
        }
})


const Slide = mongoose.model("slide", slideSchema);
app.get('/',(req,res )=>{
     Slide.find({})
     .exec((err, data)=>{
           if(err){
                 return res.json({
                  status:500,
                  mensaje :"Error en la peticion"
                 })
           } 
           res.json({
            status:200,
            data
           })

     })
       
})
/*=============================================
PETICIONES POST
=============================================*/

app.post('/crear-slide', (req, res) =>{

	let slide = req.body;

	res.json({

		slide
	})

})

/*=============================================
PETICIONES PUT
=============================================*/

app.put('/editar-slide/:id', (req, res) =>{

	let id = req.params.id;

	res.json({

		id
	})

})

/*=============================================
PETICIONES DELETE
=============================================*/

app.delete('/borrar-slide/:id', (req, res) =>{

	let id = req.params.id;

	res.json({

		id
	})

})



mongoose.connect('mongodb+srv://admin:<password>@cluster5.usshbxi.mongodb.net/test',{useNewUrlParser: true,useUnifiedTopology: true}, (err,res)=>{
   if (err) throw err;
   console.log("conectado a la base de datos")
});
app.listen(3000, ()=>{
    console.log("habilitado el puerto 3000");
})
