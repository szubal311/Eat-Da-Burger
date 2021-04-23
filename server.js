const express = require('express');
const hbsExp = require('express-handlebars');

const PORT = process.env.PORT || 4040;

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json);

app.engine('handlebars', hbsExp({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers-controller.js');

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`));
