import { Todo } from '../todos/models/todo.model';

const Filters = {
	All: 'all',
	Completed: 'Completed',
	Pending: 'Pending',
};

const state = {
	todos: [
		new Todo('Piedra del infinito'),
		new Todo('Piedra del alma'),
		new Todo('Piedra del destruccion'),
		new Todo('Piedra del realidad'),
		new Todo('Piedra del tiempo'),
	],
	filter: Filters.All,
};

const initStore = () => {
	console.log(state);
	console.log('Initstore');
};

const loadStore = () => {
	throw new Error('No implemented');
};

const getTodos = (filter = Filters.All) => {
	switch (filter) {
		case Filters.All:
			return [...state.todos];
		case Filters.Completed:
			return state.todos.filter((todo) => todo.done);
		case Filters.Pending:
			return state.todos.filter((todo) => !todo.done);
		default:
			throw new Error(`Option ${filter} is no valid.`);
	}
};

const addTodo = (description) => {
	if (!description) throw new Error('Desripcion is required');
	state.todos.push(new Todo(description));
};

const toggleTodo = (todoId) => {
	state.todos = state.todos.map((todo) => {
		if (todo.id === todoId) {
			todo.done = !todo.done;
		}
		return todo;
	});
};

/**
 *
 * @param {string} todoId el id del todo en string
 */

const deleteTodo = (todoId) => {
	state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
	state.todos = state.todos.filter((todo) => todo.done);
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
	Object.keys(Filters).includes(newFilter); // validacion si existen ese nuevo filter.
	state.filter = newFilter;
};

const getCurrentFilter = () => {
	return state.filter;
};

export default {
	addTodo,
	initStore,
	loadStore,
	deleteCompleted,
	deleteTodo,
	getTodos,
	getCurrentFilter,
	setFilter,
	toggleTodo,
};
