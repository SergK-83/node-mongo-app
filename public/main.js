'use strict';

const todoRemoveBtnList = document.querySelectorAll('.todo__remove');

todoRemoveBtnList.forEach((btn) => {
	btn.addEventListener('click',   async function (e) {
		e.preventDefault();

		const todo = this.closest('.todo');
		const todoId = todo.querySelector('input[name=id]').value;

		 let promise = await fetch('/remove', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({id: todoId})
		}).then(response => {
			if (response.redirected) {
				document.location = response.url;
			}
		 });
	});
});
