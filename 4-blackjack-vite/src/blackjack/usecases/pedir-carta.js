/**
 * Esta funcion me permite tomar un carta
 * @argument {Array<string>} deck Es un arreglo de string
 * @returns {String} retorna un carta del deck ej: 5H, 6S
 */
// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {
	if (!deck || deck.length === 0) {
		throw 'No hay cartas en el deck';
	}
	const carta = deck.pop();
	return carta;
};
