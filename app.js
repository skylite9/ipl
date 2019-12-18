var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./queries')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


// API route details
app.get('/getTeams', db.getTeams);
app.get('/getTeamsStats/', db.getTeamsStats)
app.get('/getPlayerTypeDetails', db.getPlayerTypeDetails);
app.get('/getPlayerRoleDetails', db.getPlayerRoleDetails);
app.get('/getPlayerNationalityDetails', db.getPlayerNationalityDetails);
app.get('/getTeamsDetails/:teamName', db.getTeamsDetails)
app.post('/addPlayerDetails', db.addPlayerDetails)
app.get('/checkAdminRights/:secretCode', db.checkAdminRights)

// sample api
app.get('/check', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
