
// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Configure the Express
var app = express();
const PORT = process.env.PORT || 3000;

// access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// application routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// Start listening on PORT
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
