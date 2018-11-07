// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

var i = 0;
var multiploA = 3;
var multiploB = 5;

var esMultiploAMBOS = false;
var esMultiploTRES = false;
var esMultiploCINCO = false;

for(var i;i<= 100;i++){
    if(i%multiploA){
	console.log("GEEK");
	continue;
	}
    console.log(i);
}
