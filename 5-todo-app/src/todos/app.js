import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './casos-usos';

const elementIDs = {
	TodoList: '.todo-list',
	NewTodoInput: '#new-todo-input',
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

	// Referencia HTML

	const newDescriptionInput = document.querySelector(elementIDs.NewTodoInput);
	const todoListUL = document.querySelector(elementIDs.TodoList);

	// listener
	newDescriptionInput.addEventListener('keyup', (event) => {
		if (event.keyCode !== 13) return;
		if (event.target.value.trim().length == 0) return;

		todoStore.addTodo(event.target.value);
		displayTodos();
		event.target.value = '';
	});

	todoListUL.addEventListener('click', (event) => {
		const element = event.target.closest('[data-id]'); // el metodo closest(['identificador']) te trae el elemento mas cercando con ese identificador
		todoStore.toggleTodo(element.getAttribute('data-id'));
		displayTodos();
	});

	todoListUL.addEventListener('click', (event) => {
		const isDestroyElement = event.target.className === 'destroy';
		const element = event.target.closest('[data-id]');
		if (!element || !isDestroyElement) return;

		todoStore.deleteTodo(element.getAttribute('data-id'));
		displayTodos();
	});
};
