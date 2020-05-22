const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const pages = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function (req, res){
    const about = {
        avatar_url: "logo.png",
        name: "ROCKEATSEAT",
        description: "Mais do que uma plataforma de educação em tecnologia, somos uma comunidade incrível de programadores em busca do próximo nível 🚀",
        title_technology: "Principais Tecnologias Ultilizadas",
        technologies: [
            {name: "NodeJS"},
            {name: "ReactJS"},
            {name: "React Native"}
        ],
        links: [
            {name: "Github", url: "https://github.com/Rocketseat"},
            {name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial"},
            {name: "Facebook", url: "https://web.facebook.com/rocketseat?_rdc=1&_rdr"}
        ]
    }

    return res.render("about", { about })   
})

server.get("/courses", function (req, res){
    return res.render("courses", {items: pages})
})

server.get("/courses/:id", function(req, res) {
    const id = req.params.id;

    const page = pages.find(function(page){
        return page.id == id
    })

    if (!page) {
        return res.status(404).render("not-found")
    }
  
    return res.render('page', {item: page})
})

server.use("*", function(req, res) {
    return res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log("server is running")
})