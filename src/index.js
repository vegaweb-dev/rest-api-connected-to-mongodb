const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
//settings
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({"extended":false}));

//routes
app.use('/',require('./routes/index'))
app.use('/api/pelis',require('./routes/contenido'));







//starting the server
app.listen(app.get('port'),()=>{
    console.log(`server on port ${app.get('port')}`)
})




//conexion
mongoose.connect(process.env.MONGODB_URI).then(()=>{console.log('conectado')});
