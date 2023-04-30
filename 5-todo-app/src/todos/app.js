import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './casos-usos';

const elementIDs = {
	TodoList: '.todo-list',
};

/**
 *
 * @param {String} elementId un string
 */
export const App = (elementId) => {
	const displayTodos = (elementId) => {
		const todos = todoStore.getTodos(todoStore.getCurrentFilter());
		renderTodos(elementIDs.TodoList, todos);
	};

	// Funciona autoinvocada, Cuando App() se llama
	(() => {
		const app = document.createElement('div');
		app.innerHTML = html;
		document.querySelector(elementId).append(app);
		displayTodos();
	})();
};
