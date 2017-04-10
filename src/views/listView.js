const html = require('choo/html');

module.exports = (state, emit) => {
  const update = (e) => {
    let todos = state.todos.slice();
    todos.push({
      title: e.target.value
    });

    emit('update', todos);

    e.target.focus();
  }

  return html`
    <body>
      <h1>Todos</h1>
      <a href="#wow">wow</a>
      <input type="text" onchange=${update} />
      <ul>
        ${state.todos.map(todo => html`<li>${todo.title}</li>`)}
      </ul>
    </body>
  `;
}