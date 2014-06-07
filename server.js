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

	// listen (start app with node server.js) ======================================
	app.listen(8080);
	console.log("App listening on port 8080");

	var pokedex = new mongoose.Schema({
	name: String,
	number: String
	});

	var PokedexEntry = mongoose.model('PokedexEntry',pokedex);

	/* var bulbasaur = new PokedexEntry ({
		name: 'Bulbasaur',
		number: '001'
	});

	 bulbasaur.save(function (err) {if (err) console.log ('Error on save!')});

	var p002 = new PokedexEntry ({
		name: 'Ivysaur',
		number: '002'
	});

	p002.save(function (err) {if (err) console.log ('Error attemption to save ' + p002.name)});

	*/