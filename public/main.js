'use strict';

const todoRemoveBtnList = document.querySelectorAll('.todo__remove');

todoRemoveBtnList.forEach((btn) => {
	btn.addEventListener('click',   async function (e) {
		e.preventDefault();

		const todo = this.closest('.todo');
		const todoId = todo.querySelector('input[name=id]').value;

		console.log(todoId);

		await fetch('/remove', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({id: todoId})
		});
	});
});
