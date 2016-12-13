var alumno=require('../models/alumno')
//obtener todos los alumnos
module.exports.getAlumnos = function(req, res){ 
    alumno.getAlumnos(req, res);
};  
//obtener un alumno
module.exports.getAlumno = function(req, res){ 
  alumno.getAlumno(req, res);
};
//obtener la media de todos los alumnos
module.exports.getMediaAlumnos = function(req, res){ 
  alumno.getMediaAlumnos(req, res);
};
//crear alumno
module.exports.postAlumnos = function(req, res){   
    alumno.postAlumnos(req, res);
 }
//borrar alumno
 module.exports.deleteAlumno = function(req, res){ 
  alumno.deleteAlumno(req, res);
};
//actualizar alumno
module.exports.putAlumno = function(req, res){ 
    alumno.putAlumno(req, res);
};
