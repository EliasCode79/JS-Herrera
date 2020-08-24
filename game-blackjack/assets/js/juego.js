
( ( ) => {

	'use strict'

	let deck = [];
    let tipos = ['C','D','H','S'];
    let especiales = ['A','J','Q','K'];

    let puntosJugador = 0,
        puntosComputadora = 0;

    //       Referencias del HTML

    const btnPedir      = document.querySelector('#btnPedir');
    const puntosHTML    = document.querySelectorAll('small');
    const btnDetener    = document.querySelector('#btnDetener');
    const divCartasJugador      = document.querySelector('#jugador-cartas');
    const divCartasComputadora  = document.querySelector('#computadora-cartas');
    const nuevoJuego            = document.querySelector('#btnNuevo');
   
    // Esta funcion me permite crear una baraja
	const crearDeck = () => {

		for( let i=2; i<=10; i++){
			for(let tipo of tipos){
				deck.push( i + tipo );
			}
		}

		for( let tipo of tipos ){
			for( let esp of especiales ){
				deck.push( esp + tipo);
			}
		}
		// console.log( deck );
		deck = _.shuffle( deck );
		console.log( deck );  /* imprime la baraja mesclada */
		return deck;
	}

		// Esta funcion me permite tomar una carta 
	const pedirCarta = () => {

		if( deck === 0 ){
			throw 'NO hay cartas';
		}

		let carta = deck.pop();
		// console.log(carta);
		return carta;
	}


	const valorCarta = ( carta ) => {
		let valor = carta.substring( 0, carta.length-1 );
		return ( isNaN( valor ))?                           /* la funcion isNaN define pregunta si el valor no es un numero */
				( valor  === 'A' ) ? 11:10
				: valor * 1;
	}


	//      Inicio Game
	crearDeck();


	// Juego de la Computadora 

	const turnoComputadora = (puntosMinimos) => {
		do{
			const carta = pedirCarta();
			puntosComputadora = puntosComputadora + valorCarta( carta );
			puntosHTML[1].innerText = puntosComputadora;
			const imgCarta = document.createElement('img');
			imgCarta.src = `assets/cartas/${ carta }.png`;
			imgCarta.classList.add('carta');
			divCartasComputadora.append( imgCarta ); 

			if(puntosMinimos > 21 ) break;
		}while( puntosComputadora < puntosMinimos && puntosMinimos <= 21 );
	}




	//  Eventos

	btnPedir.addEventListener('click', () => {
		const carta = pedirCarta();
		puntosJugador = puntosJugador + valorCarta( carta );
		puntosHTML[0].innerText = puntosJugador;
		const imgCarta = document.createElement('img');
		imgCarta.src = `assets/cartas/${ carta }.png`;
		imgCarta.classList.add('carta');
		divCartasJugador.append( imgCarta );
		
		if( puntosJugador > 21){
			console.warn('Lo siento, perdiste');
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora(puntosJugador);
		} else if( puntosJugador === 21 ){
			console.warn('21, Genial')
			btnPedir.disabled = true;
			btnDetener.disabled = true;
			turnoComputadora(puntosJugador);
		}

		// console.log( puntosJugador );
	});

	btnDetener.addEventListener('click', () => {
		btnPedir.disabled = true;
		btnDetener.disabled = true;
		turnoComputadora(puntosJugador);
		if( puntosComputadora > 21 || puntosJugador === puntosComputadora ){
			console.log('nadie gana');
		} else {
			console.log("ganaste");
		}
		// if( (puntosJugador > puntosComputadora && puntosJugador <= 21) || puntosComputadora > 21){
		//     console.log('ganaste');
		// }else{ console.log('empataraon')};
	});


	nuevoJuego.addEventListener('click', () => {    
		console.clear();
		deck = [];
		crearDeck();
		puntosJugador = 0;
		puntosComputadora = 0;
		puntosHTML[0].innerText = "0";
		puntosHTML[1].innerText = "0";
		divCartasJugador.innerHTML = '';
		divCartasComputadora.innerHTML='';
		btnPedir.disabled = false;
		btnDetener.disabled = false;
	});



})();

    