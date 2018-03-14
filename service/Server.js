const Express = require('express');
const App = Express();
const Http = require('http').Server(App);
const R = require('ramda');
const IO = require('socket.io')(Http);

const Cors = require('cors');
const Bodyparser = require('body-parser');

App.use(Cors());
App.use(Bodyparser.json());

IO.on('connect', (socket) => {

    socket.emit('welcome', { message: 'welcome' });

    socket.on('get-customers', () => {
        socket.emit('customers', require('data/customers'));
    });

});


Http.listen(9000, () => console.log('Started the javascript API at http://localhost:9000'));