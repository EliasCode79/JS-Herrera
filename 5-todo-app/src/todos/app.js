import html from './app.html?raw';

/**
 *
 * @param {String} elementId un string
 */
export const App = (elementId) => {
	// Funciona autoinvocada, Cuando App() se llama
	(() => {
		const app = document.createElement('div');
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
	})();
};
