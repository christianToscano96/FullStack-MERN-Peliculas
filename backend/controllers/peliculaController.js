const Pelicula = require('../models/Pelicula');

//cuando se cerea un nuevo Pelicula
exports.nuevaPelicula = async (req, res, next) => {
    //crear el objeto de Pelicula con datos de req.body
    const pelicula = new Pelicula(req.body);

    try {
        await pelicula.save();
            res.json({mensaje: 'La pelicula se agrego correctamente'});
    } catch (error) {
        console.log(error);
        next();
    }
}

//obtiene todos los Pelicula
exports.obtenerPeliculas = async (req, res, next) => {
    try {
        const peliculas = await Pelicula.find({});
        res.json(peliculas);
    } catch (error) {
        console.log(error);
        next();
    }
}

//obtiene un Pelicula por su id en especifico
exports.obtenerPelicula = async (req, res, next) => {
    try {
        const pelicula = await Pelicula.findById(req.params.id);
        res.json(pelicula);
    } catch (error) {
        console.log(error);
        next();
    }
}

//actualiza un registro por su id
exports.actualizarPelicula = async (req, res, next) => {
    try {
       const pelicula = await Pelicula.findByIdAndUpdate(req.params.id);
       res.json(pelicula);
        
    } catch (error) {
        console.log(error);
        next();
    }
}

//eliminar un registro su id
exports.eliminarPelicula = async (req, res, next) => {
    try {
        await Pelicula.findByIdAndDelete({_id : req.params.id});
        res.json({mensaje: 'La pelicula fue eliminada'});
    } catch (error) {
        console.log(error);
        next();
    }
}