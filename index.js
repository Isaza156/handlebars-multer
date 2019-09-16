const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

//hbs
const exphbs = require('express-handlebars');

//settings
app.set('port', process.env.PORT || 3000);

//hbs
app.set('views', path.join(__dirname, 'views'));

//configuramos ruta a nivel de proyecto
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev')); // muestra por consola la peticion que hacemos
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/index2'));
app.use('/', require('./routes/index3'));

//static files
app.use('/public', express.static(path.join(__dirname, './public')));

app.listen(app.set('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});