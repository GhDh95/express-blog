// create an instance of express
const express = require('express');
const app = express();
//set port
const port = 3000;
//import body parser
const bodyParser = require('body-parser');
//import express layouts
const expressLayouts = require('express-ejs-layouts');
//import session
const session = require('express-session');
const errorMiddleware = require('./middlewares/error');

//set view engine
app.set('view engine', 'ejs');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));
//body parser
app.use(bodyParser.urlencoded({ extended: true }));
//use csurf
//layout
app.use(expressLayouts);



const indexRouter = require('./routes/index');
const postRouter = require('./routes/posts');
app.use(errorMiddleware);

app.use('/', indexRouter);
app.use('/posts', postRouter);



app.listen(port, () => {
    console.log(`Server running on port ${port}!`)
});