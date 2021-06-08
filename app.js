const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3001;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render("index.ejs");
})

app.get('/zoom', (req, res) => {
    res.render('zoom.ejs');
});

io.on('connection', (socket) => {
    console.log('ユーザが接続しました。');
});

server.listen(port, () => {
    console.log('listening on *:3001');
});