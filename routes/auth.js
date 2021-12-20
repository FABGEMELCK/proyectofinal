const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const db = require ("../NODE_PROYECTO/backend/index");
// require('dotenv').config();

// const {Client} = require ('pg');

// app.get('/ping', async (request, response)=>{
//   const client = new Client()
//   await client.connect()
//   const res = await client.query('SELECT $1::text as message',['Hola Mundo'])
//   console.log(res.row[0].message) //Hola Mundo
//   await client.end()

//   return response.send(res.rows[0].message);
// })

// const {Client} = require ('pg');

// app.get('/ping2', async (request, response)=>{
//   const client = new Client ()
//   client.connect()

//   client.query('SELECT $1::text as message',['Hola Munco'],(err,res)=>{
//   if(err){
//     console.error(err.stack);
//     response .send('Error: ' + err.stack);
//   }
//   else{
//     console.log(res.row[0].message);//Hola Mundo
//     response.send(res.rows[0].message);
//   }  
//   client.end()
//   })
// })



const router = express.Router();

const { TOKEN_SECRET, verifyToken } = require("../middlewares/jwt-validate");
const { application, response } = require("express");

router.get("/", (req, res) => {
  res.json({ success: true });
});

router.post("/register", async (req, res) => {
  if (req.body.mail && req.body.name && req.body.password) {
    if (/^\S+@\S+\.\S+$/.test(req.body.mail) === false) {
      res
        .status(400)
        .json({ success: false, message: "Formato de mail incorrecto" });
      return;
    }

    const existeUser = usuarios.find((u) => {
      return u.mail === req.body.mail;
    });

    if (existeUser) {
      res.status(400).json({ success: false, message: "Mail repetido" });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    console.log("Salt", salt);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = {
      name: req.body.name,
      mail: req.body.mail,
      password: password,
    };

    usuarios.push(newUser);

    return res.json({ success: true, newUser });
  } else {
    return res.status(400).json({
      success: false,
      message: "Faltan datos (requeridos: mail, name, password)",
    });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = usuarios.find((u) => u.mail === req.body.mail);

    if (!user) {
      return res.status(400).json({ error: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) {
      return res.status(400).json({ error: "Contraseña no válida" });
    }

    const token = jwt.sign(
      {
        name: user.name,
        mail: user.mail,
      },
      TOKEN_SECRET
    );

    return res.json({ error: null, data: "Login exitoso", token });
  } catch (error) {
    return next(error);
  }
});

router.get("/usuarios", verifyToken, (req, res) => {
  return res.json({ error: null, usuarios });
});
module.exports = router;

const usuarios = [
  {
    name: "Fabian",
    mail: "fabian.gemelli.abalo@gmail.com",
    password: "$2b$10$f/rpZSwm2YX7sQECj/6eduVGa58jRWGifgAfvsJWjlb1.8W3a5gYa",
  },
];