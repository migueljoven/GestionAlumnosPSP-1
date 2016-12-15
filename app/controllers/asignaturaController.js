 var asignatura=require('../models/asignatura');

//obtener todas las asignaturas
 module.exports.getAsignaturas = function(req, res){ 
    asignatura.getAsignaturas(function(rows){
        if (rows.length>0) 
	        res.json(rows);
        else
            res.json({'message':'no hay asignaturas en la base de datos'});
    });
 }
//obtener una asignatura
 module.exports.getAsignatura = function(req, res){ 
    var codigo=req.params.codigo;
    asignatura.getAsignatura(codigo,function(rows){
        if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"no hay asignaturas en la base de datos con el codigo "+codigo});
        }
    });
};
//crear una asignatura
module.exports.postAsignaturas = function(req, res){
    var asignaturaBody=req.body;
    if(req.body.codigo!=undefined && req.body.nombre!=undefined){
        asignatura.postAsignaturas(asignaturaBody,function(rows,status){
            res.status(status).json(rows);
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
 }
//borrar una asignatura
 module.exports.deleteAsignatura = function(req, res){
    var codigo=req.params.codigo;
    asignatura.deleteAsignatura(codigo,function(rows){
        if(rows.affectedRows>0){
            res.json({"message":"la asignatura con codigo: "+codigo+" ha sido eliminada"});
        }else{
            res.json({"message":"no existe ninguna asignatura con el codigo: "+codigo});
        }
    });
};
//actualizar una asignatura
module.exports.putAsignatura = function(req, res){
    var codigo=req.params.codigo;
    var asignaturaBody=req.body;
    if(req.body.codigo!=undefined && req.body.nombre!=undefined){
        asignatura.putAsignatura(codigo,asignaturaBody,function(rows,status){
            if(status!=500){
                if(rows.affectedRows>0){
                    res.json({"message":"la asignatura con codigo: "+codigo+" se ha actualizado correctamente"});
                }else{
                    res.json({"message":"no existe ninguna asignatura con el codigo: "+codigo});
                }    
            }else{
                res.status(status).json(rows);
            }
            
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
};
