class Persona {
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellido() {
        return this.apellido;
    }

    setApellido(apellido) {
        this.apellido = apellido;
    }

    getDni() {
        return this.dni;
    }

    setDni(dni) {
        this.dni = dni;
    }

    saludar() {
        console.log(`Hola Mundo, soy ${this.nombre}`);
    }
}
fetch("../json/alumnos.json")
  .then(response => response.json())
  .then(data => {
    data.alumnos.forEach(alumno => {
      const nuevoAlumno = new Alumno(alumno.nombre, alumno.apellido, alumno.dni);

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
