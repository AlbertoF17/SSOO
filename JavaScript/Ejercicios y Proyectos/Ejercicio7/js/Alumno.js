function Alumno(nombre, apellido, dni, notaMarcas, notaEntornos, notaFOL, notaBBDD, notaProg, notaSSOO) {
    Persona.call(this, nombre, apellido, dni);
    this.notaMarcas = notaMarcas;
    this.notaEntornos = notaEntornos;
    this.notaFOL = notaFOL;
    this.notaBBDD = notaBBDD;
    this.notaProg = notaProg;
    this.notaSSOO = notaSSOO;

    function saludar(){
        console.log(`Hola, soy ${nombre}`);
    }
  }