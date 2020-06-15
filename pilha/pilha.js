//pilha: o primeiro a entrar é o último a sair

// o push acrecenta um elemento no final de um array e o pop retira o útimo elemento de um array

var pilha = [];
pilha.push('1-wyllian');
pilha.push('2-breno');
pilha.push('3-jose');

console.log(pilha);

pilha.pop();
pilha.push('4-caio');

console.log(pilha);

pilha.pop();
pilha.push('5-lucas');
pilha.pop();

console.log(pilha);