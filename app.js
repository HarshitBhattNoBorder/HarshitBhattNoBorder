const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002;

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('public'));

app.listen(port, () => console.log(`Rock Paper Scissor with Node listening on port ${port}!`));
