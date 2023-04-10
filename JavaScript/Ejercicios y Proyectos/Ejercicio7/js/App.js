import {Alumno} from "./Alumno.js";

fetch("../json/alumnos.json")
  .then(response => response.json())
  .then(data => {
    data.alumnos.forEach(alumno => {
      const nuevoAlumno = new Alumno(alumno.nombre, alumno.apellido, alumno.dni, alumno.notaProg,
      alumno.notaSist, alumno.notaMarc, alumno.notaBbdd, alumno.notaEntornos, alumno,notaFol);

      const tarjeta = document.createElement('div');
      tarjeta.classList.add('card');

      const nombre = document.createElement('h2');
      nombre.textContent = nuevoAlumno.nombre;

      const apellido = document.createElement('h2');
      apellido.textContent = nuevoAlumno.apellido;

      const dni = document.createElement('p');
      dni.textContent = `DNI: ${nuevoAlumno.dni}`;

      tarjeta.appendChild(nombre);
      tarjeta.appendChild(apellido);
      tarjeta.appendChild(dni);

      document.body.appendChild(tarjeta);
    });
  })
  .catch(error => console.error(error));
