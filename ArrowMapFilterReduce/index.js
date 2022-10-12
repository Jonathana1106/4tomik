/**
 * Funcion con identificador
 * @param {*} num 
 * @param {*} f 
 * @returns 
 */
// function apply(num, f) {
//     return f(num);
// }

// function double(num) {
//     return 2 * num;
// }

// function triple(num) {
//     return 3 * num;
// }

/**
 * Llamo a una funcion con su identificador
 * osea el nombre y por eso la puedo pasar
 * como parametro
 */
// console.log(apply(4, triple));

/**
 * Paso como parametro una funcion anonima
 * o sea que no tiene nombre
 */
// console.log(apply(4, function(num) {
//     return 2 * num;
// }));

/**
 * Arrow functions
 * Es basicamente lo mismo que una funcion
 * anonima solo que sin esa key.
 */
// console.log(apply(4,(num) => {
//     return 2 * num;
// }));
// Arrow function de una sola linea
// console.log(apply(4,(num) => 2 * num));


const dollars = ["32$", "15$", "12$", "17$", "20$"];

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Map: mapeo, transformar una cosa en otra, puede ser de cualquier cosa a cualquier otra cosa
 *
*/
let prices = [];

/**
 * Forma boomer
 */
for(let i = 0; i < dollars.length; i++) {
    // console.log(dollars[i].slice(0, dollars[i].length - 1));
    prices[i] = Number(dollars[i].slice(0, dollars[i].length - 1));
}

/**
 * Forma zoomer
 */

prices = [];
for(const dollar of dollars) {
    prices.push(Number(dollar.slice(0, dollar.length - 1)));
}

/**
 * Forma hacker 2021
 * lo que me van a dar => lo que hago con eso
 */
prices = [];
prices = dollars.map((dollar => Number(dollar.slice(0, dollar.length - 1))));
console.log(prices);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Filter
 */

let expensive = [];
/**
 * Boomer
 */
for(const price of prices) {
    if(price >= 20) {
        expensive.push(price);
    }
}

/**
 * Hacker 2021
 * lo que me van a dar => lo que hago con eso
 */
expensive = prices.filter(price => price >= 20);

console.log(expensive);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Reduce
 */

 /**
  * Tomar varias cosas y reducirlo
 */

 let sum = 0;

 for(price of expensive) {
     sum += price;
 }

sum = expensive.reduce((acum, price) => acum + price);

console.log(sum);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

let final = 0;

/**
 * Al mapear se colocan parentesis si no hay o hay
 * mas de un parametro, de lo contrario no es 
 * necesario
 */
final = dollars
    .map(dollar => Number(dollar.slice(0, dollar.length - 1)))
    .filter(price => price >= 20)
    .reduce((acum, price) => acum + price);

console.log(final);

console.log((prices.map(price => ({price, currency: '$'}))));