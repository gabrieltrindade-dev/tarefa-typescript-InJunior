function retornarElemento<T>(array: T[], index: number): T {
  return array[index];
}

const numeros = [10, 20, 30];
const elementoNumero = retornarElemento(numeros, 1);
console.log(elementoNumero); //20

const letras = ["a", "b", "c"];
const elementoString = retornarElemento(letras, 0);
console.log(elementoString); //a