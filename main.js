const ages = [20, 25, 80, 15, 40, 16, 21];

//forma tracicional
// for (let i = 0; i < ages.length; i++) {
//     console.log('El año de nacimiento es', 2020 - ages[i]);
// }

// ------------------------------------
// MAP
// ages.map((elem, index, arr) => {
//     console.log('Elem', elem);
//     console.log('Index', index);
//     console.log('Arr', arr);
// });

// ages.map((elem, index, arr) => {
//     console.log('El año de nacimiento es', 2020 - elem);
// });

// const proximaEdad = ages.map((elem, index, arr) => {
//     return elem + 1;
// });

// console.log('Original', ages);
// console.log('Modificado', proximaEdad);
// -------------------------------------

// FILTER
// const allowedAges = ages.filter((elem, index, arr) => { //necesitamos una operación que devuelva true o false
//     return elem >= 18;
// });

// console.log('Pueden entrar los que tienen edad', allowedAges);

// REDUCE: reduce el array a un único valor
// const totalAge = ages.reduce((total, elem, index, arr) => {
//     return total + elem;
// });
// console.log('La edad total es', totalAge);