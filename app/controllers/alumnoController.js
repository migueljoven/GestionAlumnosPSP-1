var alumno=require('../models/alumno')
//obtener todos los alumnos
module.exports.getAlumnos = function(req, res){ 
    alumno.getAlumnos(function(rows){
        if (rows.length>0) 
	        res.json(rows);
        else
            res.json({'message':'no hay alumnos en la base de datos'});
   });
};  
//obtener un alumno
module.exports.getAlumno = function(req, res){
    var dni=req.params.dni;
    alumno.getAlumno(dni,function(rows){
    if(rows.length>0){
        res.json(rows);
    }else{
        res.json({"message":"no hay alumnos en la base de datos con el dni "+dni});
    }
  });
};
//obtener la media de todos los alumnos
module.exports.getMediaAlumnos = function(req, res){
  alumno.getMediaAlumnos(function(rows,status){
      if(status!=500)
        res.json({"message":"la nota media de los alumnos es "+rows[0].obtener_media});
      else
        res.status(status).json(rows)
  });
};
//crear alumno
module.exports.postAlumnos = function(req, res){
    var alumnoBody=req.body;
    if(alumnoBody.dni!=undefined && alumnoBody.nombre!=undefined && alumnoBody.apellidos!=undefined){
        alumno.postAlumnos(alumnoBody,function(rows,status){
            res.status(status).json(rows);
        });
    }else{
            res.status(409).json({"message":"los datos introducidos no son correctos"});
        }
 }
//borrar alumno
 module.exports.deleteAlumno = function(req, res){
    var dni=req.params.dni;
    alumno.deleteAlumno(dni,function(rows){
        if(rows.affectedRows>0){
            res.json({"message":"el alumno con dni: "+dni+" ha sido eliminado"});
        }else{
            res.json({"message":"no existe ningun alumno con el dni: "+dni});
        }
  });
};
//actualizar alumno
module.exports.putAlumno = function(req, res){
    var alumnoBody=req.body;
    var dni=req.params.dni;
    if(req.body.dni!=undefined && req.body.nombre!=undefined && req.body.apellidos!=undefined){
        alumno.putAlumno(alumnoBody,dni,function(rows,status){
            if(status!=500){
                if(rows.affectedRows>0){
                    res.json({"message":"el alumno con dni: "+dni+" se ha actualizado correctamente"});
                }else{
                    res.json({"message":"no existe ningun alumno con el dni: "+dni});
                }
            }else{
                res.status(status).json(rows);
            }
        });
     }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
};
