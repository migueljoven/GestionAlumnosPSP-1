 var matricula=require('../models/matricula');

 //obtener las matriculas de todos los alumnos
 module.exports.getMatriculas = function(req, res){ 
    matricula.getMatriculas(req, res);
 }
//obtener la matricula de un alumno
 module.exports.getMatricula = function(req, res){ 
    matricula.getMatricula(req, res);
};
//crear matricula
 module.exports.postMatriculas = function(req, res){ 
    matricula.postMatriculas(req, res);
 }
//borrar matricula
module.exports.deleteMatricula = function(req, res){ 
    matricula.deleteMatricula(req, res);
};
//actualizar matricula
module.exports.putMatricula = function(req, res){ 
  matricula.putMatricula(req, res);
};
