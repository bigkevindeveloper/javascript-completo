
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
    [],
    [],
    []
]

for(var i = 0; i<=2;i++){
    for(var x = 0;x<=2;x++){
	if(i==0){
	   matriz[i][x]="0"+x;
	}
	if(i==1){
           matriz[i][x] ="1"+ x;
	}
	if(i==2){
           matriz[i][x] = "2"+x;
        }

    }
}

console.log(matriz);
