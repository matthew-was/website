'use strict';
const express = require('express');
const routes = require('./routes');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');
app.disable('view cache');

app.use((req, res, next) => {
  console.log(`Entered app for ${req.path}, time: ${new Date().toISOString()}`);
  next();
});

app.use('/', routes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
