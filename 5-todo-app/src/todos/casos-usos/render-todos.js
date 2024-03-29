import { Todo } from '../models/todo.model';
import { createTodoHTML } from './';

let element;
/**
 *
 * @param {string} elementId id del elemento html
 * @param {Todo} todos Objeto todo
 */
export const renderTodos = (elementId, todos = []) => {
	if (!element) element = document.querySelector(elementId);

	// console.log(element);
	if (!elementId) throw new Error(`Element ${elementId} not found`);
	element.innerHTML = '';
	todos.forEach((todo) => {
		element.append(createTodoHTML(todo));
	});
};
