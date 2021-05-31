const express = require("express");
const mongoose = require("mongoose");
const Grupo = require("./model/grupo");
var cors = require('cors');
const app = express();
app.use(cors());

require("dotenv/config");

  app.use(express.json());

app.get("/grupos", async(req, res) => {
  const resultado = await Grupo.find();
  res.send(resultado);
});

app.get("/grupo/:id", async(req, res) => {
  const resultado = await Grupo.findOne({_id: req.params.id});
  res.send(resultado);
});

app.get("/buscargrupo/:arg", async(req, res) => {
  const resultado = await Grupo.find({name: new RegExp(req.params.arg, 'i')});
  res.send(resultado);
});

app.delete("/borrargrupo/:id", async(req, res) => {
  try{
    await Grupo.remove({_id: req.params.id});
    res.send({message: req.params.id});
  } catch(err) {
    res.send({message: err});
  }
});

app.post("/creargrupo", async(req, res) => {
  try{
    const {name} = req.body;
    const miGrupo = new Grupo(req.body);
    const grupoExiste = await Grupo.findOne({name});
    if(grupoExiste){
      return res.status(400).json({
        ok: false,
        msg: 'El grupo ya existe'
      });
    } else {
      await miGrupo.save();
      res.send(miGrupo);
    }
  } catch(err) {
    res.send({message: err});
  }
});

app.post("/actualizargrupo/:id", async(req, res) => {
  try{
    const datosBody = req.body;
    const grupoExiste = await Grupo.findOne({_id: req.params.id});
    
    if(grupoExiste){
      Grupo.updateOne({_id: req.params.id}, datosBody, err => {
        if (err) throw err;
      });
      res.send({message: "Grupo con id "+req.params.id+" actualizado."});
    } else {
      return res.status(400).json({
        ok: false,
        msg: 'No existe el grupo con la id introducida'
      });
    }
  } catch(err) {
    res.send({message: err});
  }
});

const client = mongoose.connect(process.env.DB_CONNECTION_STRING,
{ 
  useUnifiedTopology: true,
  useNewUrlParser: true 
},
(req, res) => {
  console.log("API de grupos de Rock de los 70.");
});

app.listen(3000, () =>{
    console.log("Listening to 3000");
});

