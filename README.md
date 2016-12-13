# Proyecto primer trimestre Programacion de Servicios y Procesos

proyecto para el primer trimestre de Programacion de Servicios y Procesos
## utilizacion

descargar el proyecto, realizar npm install && npm start 
realizar peticiones GET, POST, PUT y DELETE al la direccion: https://ip:3000
tanto a los POST como al hacer los PUT debemos enviar un JSON valido en el body de la peticion

## peticiones

puede realizar las siguientes peticiones:
### GET:
obtener todos los alumnos
```
https://ip:3000/Alumnos
```
obtener un alumno
```
https://ip:3000/Alumno/:dni
```
obtener la nota media de todos los alumnos
```
https://ip:3000/getMediaAlumnos
```
obtener todas las asignaturas
```
https://ip:3000/Asignaturas
```
obtener una asignatura
```
https://ip:3000/Asignaturas/:codigo
```
obtener todas las matriculas
```
https://ip:3000/Matriculas
```
obtener las matriculas de un alumno
```
https://ip:3000/Matriculas/:dni_alumno
```
### POST:
crear un alumno
```
https://ip:3000/Alumnos
```
crear una asignatura
```
https://ip:3000/Asignaturas
```
crear una matricula
```
https://ip:3000/Matriculas
```
### DELETE:
borrar un alumno
```
https://ip:3000/Alumnos/:dni
```
borrar una asignatura
```
https://ip:3000/Asignaturas/:codigo
```
borrar una matricula
```
https://ip:3000/Matriculas/:dni_alumno/:codigo_asignatura/:fecha
```

### PUT:
actualizar un alumno
```
https://ip:3000/Alumnos/:dni
```
actualizar una asignatura
```
https://ip:3000/Asignaturas/:codigo
```
actualizar una matricula
```
https://ip:3000/Matriculas/:dni_alumno/:codigo_asignatura/:fecha
```

## Autores

* **Pedro Torrebejano Guerero** 
* **Francisco Arroyo Eliche** 
* **Miguel Muñoz Luque** 
* **David Martinez Tuñon** 



