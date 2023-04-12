const express = require('express');
var exphbs = require('express-handlebars');
const path = require("path");

const app = express();
const port = 3000;

//HANDLEBARS

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//STATIC 
app.use(express.static(path.join(__dirname,"static")));

app.use('/',require(path.join(__dirname,'/routes/blog.js')))

app.listen(port, () => console.log(`Blog app listening on http://localhost:${port}!`))