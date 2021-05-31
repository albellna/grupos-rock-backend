const express = require("express");
const mongoose = require("mongoose");
const Grupo = require("./model/grupo");
const app = express();

require("dotenv/config");

  app.use(express.json());

app.get("/", async(req, res) => {
  const resultado = await Grupo.find();
  res.send(resultado);
});

app.post("/crear_grupo", async(req, res) => {
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