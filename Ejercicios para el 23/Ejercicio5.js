console.log("Ejercicio 5");
var x, y suma, m ;

x = prompt("Ingrese numero");
y = x;

while(y = x){
    m = prompt("Ingrese un nuevo numero");
    x-1;
    suma = suma + m;
    if(y = 0){
        console.log(suma);
        break;
    }
}