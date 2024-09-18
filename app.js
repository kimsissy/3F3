const express = require('express');
const routes = require('./routes/routes');
const app = express();
app.set('view engine', 'ejs');
// app.use();

app.use('/', routes);

app.listen(3002, () => {
    console.log('server running on http://localhost:3002');
});