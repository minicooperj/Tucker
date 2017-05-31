// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var passport = require('passport');
var session = require('express-session');
var bodyParser = require("body-parser");
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var flash = require('connect-flash');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

//For Handlebars
app.use(express.static(process.cwd() + '/public'));
app.set('views', './views');
app.engine('handlebars', exphbs({ defaultLayout: "main" }));
app.set('view engine', 'handlebars');

// Routes =============================================================

//routes for customer signin/signup/signout
require('./routes/customer_auth_routes.js')(app, passport);

//routes for store signin/signup/signout
require('./routes/store_auth_routes.js')(app, passport);

//html routes
app.use("/", require('./routes/html_routes.js'));

//====================================================================

//load passport strategies
require('./config/passport/passport.js')(passport);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});