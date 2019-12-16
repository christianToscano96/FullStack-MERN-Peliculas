const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');

//crar el servidor
const app = express();
//habilitar cors para poder consumir el axios en el front
app.use(cors());

//habilitar el body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//conectar a mongooDb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/cartelera', {
    userNewUrlParser: true,
    useUnifieldTopology: true,
    useFindAndModify: false
});

//habilitar routing
app.use('/', routes());

//puerto y arrancar el servidor
app.listen(4000, () => {
    console.log('servidor funcionando');
})