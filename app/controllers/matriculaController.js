 var matricula=require('../models/matricula');

 //obtener las matriculas de todos los alumnos
 module.exports.getMatriculas = function(req, res){ 
    matricula.getMatriculas(function(rows){
        if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"no hay matriculas en la base de datos"});
        }
    });
 }
//obtener la matricula de un alumno
 module.exports.getMatricula = function(req, res){
    var dni_alumno=req.params.dni_alumno;
    matricula.getMatricula(dni_alumno,function(rows){
         if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"el alumno con el dni: "+dni_alumno+" no esta matriculado de ninguna asignatura"});
        }
    });
};
//crear matricula
 module.exports.postMatriculas = function(req, res){
     if(req.body.dni_alumno!=undefined && req.body.codigo_asignatura!=undefined && req.body.nota!=undefined && req.body.fecha!=undefined){
        var datos=req.body;
        matricula.postMatriculas(datos,function(rows,status){
            res.status(status).json(rows);
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
 }
//borrar matricula
module.exports.deleteMatricula = function(req, res){
    var parametros=req.params;
    matricula.deleteMatricula(parametros,function(rows){
        if(rows.affectedRows>0){
            res.json({"message":"la matricula se ha eliminado correctamente"});
        }else{
            res.json({"message":"el alumno con dni: "+parametros.dni_alumno+" no esta matriculado en la asignatura "+parametros.codigo_asignatura+" en la fecha "+parametros.fecha});
        }
    });
};
//actualizar matricula
module.exports.putMatricula = function(req, res){
    var parametros=req.params;
    var matriculaBody=req.body;
    if(req.body.dni_alumno!=undefined && req.body.codigo_asignatura!=undefined && req.body.nota!=undefined && req.body.fecha!=undefined){
        matricula.putMatricula(parametros,matriculaBody,function(rows,status){
            if(status!=500){
                if(rows.affectedRows>0){
                    res.json({"message":"la matricula se ha actualizado correctamente"});
                }else{
                    res.json({"message":"el alumno con dni: "+parametros.dni_alumno+" no esta matriculado en la asignatura "+parametros.codigo_asignatura+" en la fecha "+parametros.fecha});
                }
            }else{
                res.status(status).json(rows);
            }
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
};
