const express = require('express')
const app = express()
const port = 3001

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render("index.html");
})

app.listen(port, () => {
    console.log('listening on *:3001');
})