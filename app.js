const express = require('express');
const app = express();
const path = require("path");
const db = require("./db");

const { Client } = require("pg");
if (process.env.ENV !=="production"){
  require("dotenv").config();
}
const { resolve } = require ("path");
const{ config }= require ("dotenv");

config ({ path: resolve (__dirname,"./.env")});


const port = 3030;

//pgadmin
app.get("/productos", async (req,res)=>{
  const productos = await db.query("Select * from productos" );
  res.send({
    Object : productos.rows,
  });
});

app.get("/empleados", async (req,res)=>{
  const empleados = await db.query("Select * from empleados" );
  res.send({
    Object : empleados.rows,
  });
});


app.get("/activos", async (req,res)=>{
  const activos_fijos = await db.query("Select * from activos_fijos" );
  res.send({
    Object : activos_fijos.rows,
  });
});

app.get("/default", (req,res) =>{
  const defaultuser = {
    nombre:"Fabian Gemelli",
    TarjetaDeCrédito:"2428 10124208 0",
    Dirección:"Azambuya 2586 AP 602",
  }

  return res.status(200).json({defaultuser})
});


const usuarios = require("./users");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



app.use("/users", usuarios);

app.use(express.static(__dirname + "/public"));
/*app.get('/', (req,res) => {
  res.render(__dirname + "/panbastardo.ejs");
});*/

app.use((req,res,next) => {
    res.status(404).sendFile(__dirname + "/public/404.html");
});


//Listen Server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});