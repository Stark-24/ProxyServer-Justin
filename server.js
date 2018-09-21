const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
const router = require('./router.js');
const PORT = 9000;

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

app.use('/api', router);

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log('STARKLOUD UP AND RUNNING ON PORT ', PORT);
})