var express = require('express');
var router = express.Router();
var mysql=require('mysql')


var controlador = require('../controllers/main');
var controladorAlumno=require('../controllers/alumnoController');
var controladorAsignatura=require('../controllers/asignaturaController');
var controladorMatricula=require('../controllers/matriculaController');
/*index*/
router.get('/', controlador.index);


/*Alumnos*/
router.get('/Alumnos', controladorAlumno.getAlumnos);

router.get('/Alumnos/:dni', controladorAlumno.getAlumno);

router.get('/getMediaAlumnos', controladorAlumno.getMediaAlumnos);

router.post('/Alumnos', controladorAlumno.postAlumnos);

router.delete('/Alumnos/:dni', controladorAlumno.deleteAlumno);

router.put('/Alumnos/:dni', controladorAlumno.putAlumno);


/*Asignaturas */
router.get('/Asignaturas',controladorAsignatura.getAsignaturas);

router.get('/Asignaturas/:codigo', controladorAsignatura.getAsignatura);

router.post('/Asignaturas', controladorAsignatura.postAsignaturas);

router.delete('/Asignaturas/:codigo', controladorAsignatura.deleteAsignatura);

router.put('/Asignaturas/:codigo', controladorAsignatura.putAsignatura);


/*Matriculas */
router.get('/Matriculas',controladorMatricula.getMatriculas);

router.get('/Matriculas/:dni_alumno', controladorMatricula.getMatricula);

router.post('/Matriculas', controladorMatricula.postMatriculas);

router.delete('/Matriculas/:dni_alumno/:codigo_asignatura/:fecha', controladorMatricula.deleteMatricula);

router.put('/Matriculas/:dni_alumno/:codigo_asignatura/:fecha', controladorMatricula.putMatricula);

module.exports = router;
