import express from 'express';
import session from 'express-session';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import logger from 'morgan';
import path from 'path';
import settings = from '../config/settings.json';

let port = process.env.PORT || 3000;

// Connect to MongoDB
let dbURI = process.env.DATABASE_URI || settings.databaseURI;
mongoose.connect(dbURI);

// Configure view template engine
app.engine('.hbs', handlebars({ 
  layoutsDir: './views/layouts/',
  defaultLayout: 'application',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use(express.static('public'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port);
log('Server started on port ' + port);
