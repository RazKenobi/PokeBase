	// set up ========================
	var express  = require('express');
	var app      = express(); 								// create our app w/ express
	var mongoose = require('mongoose'); 					// mongoose for mongodb

	// configuration =================

	mongoose.connect('mongodb://pokeadmin:pokebase@ds045089.mongolab.com:45089/pokebase'); 	// connect to mongoDB database on modulus.io

	app.configure(function() {
		app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
	});

	var pokedex = new mongoose.Schema({
		name: String,
		number: String
	});

	var PokedexEntry = mongoose.model('PokedexEntry',pokedex);

	app.get('/api/pokedex', function (req,res) {
		PokedexEntry.find(function(err,pokedexEntries) {
			if (err)
				res.send(err)
			pokedexEntries.sort('number');
			res.json(pokedexEntries);
		});
	});

	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	// listen (start app with node server.js) ======================================
	app.listen(8080);
	console.log("App listening on port 8080");