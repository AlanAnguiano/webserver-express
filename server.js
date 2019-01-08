const express = require('express');
var app = express();

const port = process.env.PORT || 3000; 

const hbs = require('hbs');
require('./hbs/helpers'); 

app.use(express.static(__dirname + '/public'))

//expres HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs')

//helpers


app.get("/", (req, res) =>{
    
    res.render("home", {
        nombre: "alan",
    })
    
})
app.get('/about', (req,res)=>{
    res.render("about",{
    });
})
  
app.listen(port, ()=>{
    console.log(`escuchando peticiones en puerto ${port}`);
});