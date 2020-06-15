// fila: o primeiro que entra é o primeiro que sai

// o push acrecenta um elemento no final de um array e o shift retira o primeiro elemento de um array

var fila = [];
fila.push('1-breno');
fila.push('2-wyllian');
fila.push('3-caio');
console.log(fila);

fila.shift();

fila.push('4-lucas');
console.log(fila);

fila.shift();
fila.shift();
console.log(fila);
