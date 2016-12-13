 var asignatura=require('../models/asignatura');

//obtener todas las asignaturas
 module.exports.getAsignaturas = function(req, res){ 
    asignatura.getAsignaturas(req,res);
 }
//obtener una asignatura
 module.exports.getAsignatura = function(req, res){ 
    asignatura.getAsignatura(req,res);
};
//crear una asignatura
module.exports.postAsignaturas = function(req, res){ 
    asignatura.postAsignaturas(req,res);
 }
//borrar una asignatura
 module.exports.deleteAsignatura = function(req, res){ 
    asignatura.deleteAsignatura(req,res);
};
//actualizar una asignatura
module.exports.putAsignatura = function(req, res){ 
    asignatura.putAsignatura(req,res);
};
