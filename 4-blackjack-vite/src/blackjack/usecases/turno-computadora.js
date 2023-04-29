import { crearCartaHtml, pedirCarta, valorCarta } from './';
// turno de la computadora

/**
 * Turno de la computadora
 * @param {Number} puntosMinimos puntos minimos q la computadora necesita para ganar.
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos.
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas.
 * @param {Array<string>} deck
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {
	if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
	if (!puntosHTML) throw new Error('Argumentos puntosHTML son necesarios');
	let puntosComputadora = 0;
	do {
		const carta = pedirCarta(deck);

		puntosComputadora = puntosComputadora + valorCarta(carta);
		puntosHTML.innerText = puntosComputadora;

		// <img class="carta" src="assets/cartas/2C.png">
		const imgCarta = crearCartaHtml(carta);
		divCartasComputadora.append(imgCarta);

		if (puntosMinimos > 21) {
			break;
		}
	} while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

	setTimeout(() => {
		if (puntosComputadora === puntosMinimos) {
			alert('Nadie gana :(');
		} else if (puntosMinimos > 21) {
			alert('Computadora gana');
		} else if (puntosComputadora > 21) {
			alert('Jugador Gana');
		} else {
			alert('Computadora Gana');
		}
	}, 100);
};
