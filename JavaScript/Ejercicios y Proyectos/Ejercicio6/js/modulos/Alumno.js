class Alumno extends Persona {
    constructor(nombre, apellido, dni, notas) {
        super(nombre, apellido, dni);
        this.notas = notas;
    }
    saludar() {
        return "Hola soy " + this.nombre;
    }
}