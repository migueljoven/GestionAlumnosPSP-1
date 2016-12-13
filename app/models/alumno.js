var db=require('./db');

//obtener todos los alumnos
module.exports.getAlumnos=function(req, res){
    db.query('SELECT * from alumnos', function(err, rows, fields) {
        if (err) throw err;
        if(rows.length>0){
            res.json(rows);
        }else{
            res.json({"message":"no hay alumnos en la base de datos"});
        }
  });
}

//obtener un alumno
module.exports.getAlumno = function(req, res){ 
  var dni=req.params.dni;
    db.query('SELECT * from alumnos where dni=?',[dni], function(err, rows, fields) {
    if (err) throw err;
    if(rows.length>0){
        res.json(rows);
    }else{
        res.json({"message":"no hay alumnos en la base de datos con el dni "+dni});
    }
  });
};

//crear alumno
module.exports.postAlumnos = function(req, res){   
    if(req.body.dni!=undefined && req.body.nombre!=undefined && req.body.apellidos!=undefined){
        db.query('insert into alumnos set ?',[req.body], function(err, rows, fields) {
            if (err){
                res.status(500).json({"message":"se ha producido un error al crear el usuario"});
            }else{
                res.status(201).json({"message":"insertado el alumno con dni: "+req.body.dni+", nombre: "+req.body.nombre+" y apellidos: "+req.body.apellidos});
            }
        });
    }else{
      res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
 }

//borrar alumno
 module.exports.deleteAlumno = function(req, res){ 
    var dni=req.params.dni;
    db.query('delete from alumnos where dni=?',[dni], function(err, rows, fields) {
        if (err) throw err;
        if(rows.affectedRows>0){
            res.json({"message":"el alumno con dni: "+dni+" ha sido eliminado"});
        }else{
            res.json({"message":"no existe ningun alumno con el dni: "+dni});
        }
  });
};

//actualizar alumno
module.exports.putAlumno = function(req, res){ 
    var dni=req.params.dni;
    if(req.body.dni!=undefined && req.body.nombre!=undefined && req.body.apellidos!=undefined){
        db.query('UPDATE alumnos SET ? WHERE dni = ?',[req.body,dni], function(err, rows, fields) {
            if (err) res.status(500).json({"message":"se ha producido un error al actualizar el alumno"});
            if(rows.affectedRows>0){
                res.json({"message":"el alumno con dni: "+dni+" se ha actualizado correctamente"});
            }else{
                res.json({"message":"no existe ningun alumno con el dni: "+dni});
            }
        });
    }else{
        res.status(409).json({"message":"los datos introducidos no son correctos"});
    }
};

//obtener la media de todos los alumnos
module.exports.getMediaAlumnos = function(req, res){ 
    db.query('select obtener_media()', function(err, rows, fields) {
        if (err) res.json({"message":"se ha producido un error al obtener la media"});
        rows = JSON.stringify(rows).replace("()", ''); // convertimos el json a string para poder quitarle () a obtener_media()
        rows = JSON.parse(rows);
        res.json({"message":"la nota media de los alumnos es "+rows[0].obtener_media});
  });
};