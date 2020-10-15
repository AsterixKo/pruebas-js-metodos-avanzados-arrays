
// Crea un array de 10 números.
// Multiplica todos los valores del array por 4 y muestra en consola el array resultante.
// Utiliza el método .map() para imprimir en consola el siguiente texto:
// El número multiplicado por 4 es igual a RESULTADO

const numbers = [37, 48, 85, 2, 5, 8, 4, 85, 34, 56];

const numbersModif = numbers.map((value, index, arr)=>{
    const result = value * 4;
    console.log('El número multiplicado por 4 es igual a', result);
    return result;
});

console.log('Original:', numbers);
console.log('Modificado:', numbersModif);

// Crea un array de 10 edades de personalbar, en el que haya al menos 3 edades < 18 años.
// Filtra los valores para que solo aparezcan las personas < 18 años e imprime los valores en la consola.
// Filtra los valores para que solo aparezcan las personas > 18 años e imprime los valres en la consola.
const edades = [4, 10, 30, 18, 5, 6, 9, 15, 12, 20];

const edadesMenores = edades.filter((value, index, array)=>{
    return value < 18;
});

console.log('Edades menores:', edadesMenores);

const edadesMayores = edades.filter((value, index, arr)=>{
    return value > 18;
});

console.log('Edades mayores:', edadesMayores);

// Crea un array de 10 números con decimales.
// Utilizando el metodo .reduce(), redondea los números en el  array y muestra la suma de todos.
// Nota: Para hacer el redondeo debes hacer uso de Math.round(número)

const numerosDecimales = [1.14, 2.24, 3.58, 4.89, 5.98, 6.12, 7.10, 8.88, 9.10, 10.12];

const totalSuma = numerosDecimales.reduce((total, curr, index,arr)=>{
    console.log('total:', Math.round(total));
    console.log('curr:', Math.round(curr));
    return Math.round(total) + Math.round(curr);
});
console.log('totalSuma:', totalSuma);