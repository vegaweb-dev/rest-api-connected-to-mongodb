const{Router} = require('express');
const router = Router();
const contenidoSchema = require('../models/contenido');
// const pelis = require('../sample.json');

router.get('/',(req,res)=>{
    res.json(pelis);

});

router.post('/',(req,res)=>{
    const pelicula = contenidoSchema(req.body);
    pelicula.save().then((data)=>{
        console.log('creado');
                  res.send(data)
    })



})











module.exports = router;