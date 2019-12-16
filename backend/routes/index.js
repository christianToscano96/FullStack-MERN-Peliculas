const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/peliculaController');

module.exports = function() {
    //agrega nuevos peliculas via post
    router.post('/peliculas', 
        peliculaController.nuevaPelicula
    );

    //obtiene todos los regitros de las peliculas en la DB
    router.get('/peliculas',
        peliculaController.obtenerPeliculas
    );

    //obtiene un pelicula en especifico
    router.get('/peliculas/:id', 
        peliculaController.obtenerPelicula
    );

    //Actualiza un registro con un a ID en especifico
    router.put('/peliculas/:id', 
        peliculaController.actualizarPelicula
    );

    //elimina un registro de la db
    router.delete('/peliculas/:id',
        peliculaController.eliminarPelicula
    );

    return router;
}