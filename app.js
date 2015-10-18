var express = require('express');

var app = express();

app.use(require('./controllers/index'));
app.use(require('./controllers/curso-registro'));
app.use(require('./controllers/confirmar'));
app.use(require('./controllers/reto'));
app.use(require('./controllers/retodia1'));
app.use(require('./controllers/retodia2'));
app.use(require('./controllers/retodia3'));
app.use(require('./controllers/retodia4'));
app.use(require('./controllers/retodia5'));
app.use(require('./controllers/retodia6'));
app.use(require('./controllers/retodia7'));
app.use(require('./controllers/retodia8'));
app.use(require('./controllers/retodia9'));
app.use(require('./controllers/retodia10'));

app.listen(process.env.PORT);
