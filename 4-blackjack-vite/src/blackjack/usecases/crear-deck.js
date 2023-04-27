// import { shuffle } from 'underscore';  // podemos importar direcamente la funcion.
import _ from 'underscore'; // aca importamos todo el archivo y asi tenemos acceso a todas sus funciones.

/**
 *
 * @param {Array<string>} tipoDeCarta - Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales - Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipoDeCarta, tiposEspeciales) => {
	if (!tipoDeCarta || tipoDeCarta.length === 0)
		throw new Error('Tipos de carta es obligatorio como un arreglo de string');

	let deck = [];
	for (let i = 2; i <= 10; i++) {
		for (let tipo of tipoDeCarta) {
			deck.push(i + tipo);
		}
	}

	for (let tipo of tipoDeCarta) {
		for (let esp of tiposEspeciales) {
			deck.push(esp + tipo);
		}
	}
	// console.log( deck );
	deck = _.shuffle(deck);
	return deck;
};

// export default crearDeck; // asi se crea un exportacion por defecto. Cuando importemos esta funcion lo podemos hacer sin la necesidad de desestructura y ademas podemos llamarla como crearamos(en un archivo q estemos importando este funcion).
