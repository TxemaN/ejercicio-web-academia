const express=require("express");
const app=express();

const port = 3000;

//carpeta pública//
app.use(express.static(__dirname+"/public"))

//establecer plantillas//
app.set("views", __dirname + "/views");
app.set("view engine", "ejs")

//cada una de las paginas//
app.get("/", (req, res) =>{
    res.render('index', {})
  } )

  app.get("/contacto", (req, res) =>{
    res.render("contacto", {})
  } )

  app.get("/cursos", (req, res) =>{
    res.render("cursos", {})
  })

  app.get("/instalaciones", (req, res) =>{
    res.render("instalaciones", {})
  })

  app.get("/profesores", (req, res) =>{
    res.render("profesores", {})
  })

  app.listen(port, ()=>{
    console.log('servidor por el puerto' , port)
  })