// crea la función extraerAcronimo
// Esta función recibe un numero indeterminado de argumentos
// y los recibiremos en la array input con el operador rest (...input)
// Debe devolver un string con sus iniciales 
// Por ejemplo:
// extraerAcronimo('Estudiante','Del','Bootcamp','Fullstack','Geekshubs') === 'EDBFG'


// 
// utilizar un bucle for of

// Ha de pasar los test adjuntados.

let extraerAcronimo = (...input) => {
    let acronimo = '';
    var arr = [];
    // Aquí tu código.  Desde aquí:
    for(var x = 0; x <= input.length ;x++){
        console.log(x[i].charAt(0));
        arr.push(letra);
    }
    for(var i = 0; i <= arr.length;i++){
        acronimo += arr[i];
    }
    // Hasta aquí.
    return acronimo;
}


let test = require('../test.js');

test(extraerAcronimo, ['Estudiante', 'Del', 'Bootcamp', 'Fullstack', 'Geekshubs'], 'EDBFG');
test(extraerAcronimo, ['hola', 'caracola'], 'hc');
test(extraerAcronimo, ['33', '44',' '], '34 ');
