require('./styles/main.scss');

const html = require('choo/html');
const choo = require('choo');
let app = choo();

// Import views
const listView = require('./views/listView');
const listView2 = require('./views/listView2');

// App state and emitters
app.use((state, emitter) => {
  state.todos = [];

  // Listeners
  emitter.on('DOMContentLoaded', () => {
    emitter.on('update', newTodos => {
      state.todos = newTodos;
      emitter.emit('render');
    });

    emitter.on('render', () => console.log('rendering'));
  });
});

// Routes accessed with hashes
app.route('/', listView);
app.route('/:test', listView2);

app.mount('body');
