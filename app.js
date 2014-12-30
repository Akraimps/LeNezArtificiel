var express = require('express')
var express = require('express')
var stylus = require ('stylus')
var nib = require('nib')
var fs = require('fs')
var string = require('string')

var cfg = fs.readFileSync('cfg.txt', 'utf-8')
var port = string(cfg).chompLeft('port=').s

var app = express() 

function compile (str, path) {
	return stylus(str)
	.set('filename', path)
	.use(nib())
}

app.set ('views', __dirname + '/views')
app.set ('view engine', 'jade')

app.use(stylus.middleware(
	{ 
		src: __dirname + '/public',
		compile: compile
	}
))

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res){
	res.render('introduction',
		{
			title: 'Introduction',
			section: 'Introduction'
		}
	)
})

app.get('/11', function (req, res){
	res.render('sectionIsubpartI',
		{
			title: 'I A)',
			section: 'I. Le système olfactif',
			subpart: 'A. Le fonctionnement  du système olfactif'
		}
	)
})

app.get('/12', function (req, res){
	res.render('sectionIsubpartII',
		{
			title: 'I B)',
			section: 'I. Le système olfactif',
			subpart: 'B. Comment est caractérisée une odeur ?'
		}
	)
})

app.get('/13', function (req, res){
	res.render('sectionIsubpartIII',
		{
			title: 'I C)',
			section: 'I. Le système olfactif',
			subpart: 'C. Les troubles du système olfactif'
		}
	)
})

app.get('/21', function (req, res){
	res.render('sectionIIsubpartI',
		{
			title: 'II A)',
			section: 'II. Les systèmes experts',
			subpart: 'A. Qu\'est-ce qu\'un système expert?'
		}
	)
})

app.get('/22', function (req, res){
	res.render('sectionIIsubpartII',
		{
			title: 'II A)',
			section: 'II. Les systèmes experts',
			subpart: 'B. Les algorithmes, cœur des systèmes experts'
		}
	)
})

app.get('/23', function (req, res){
	res.render('sectionIIsubpartIII',
		{
			title: 'II A)',
			section: 'II. Les systèmes experts',
			subpart: 'C. Exemples de systèmes experts dans la médecine (palier aux troubles de la vue)'
		}
	)
})

app.get('/31', function (req, res){
	res.render('sectionIIIsubpartI',
		{
			title: 'III A)',
			section: 'III. Palier aux dysfonctionnements du système olfactif',
			subpart: 'A. Moyen de remplacer la carte mentale réelle par un système expert'
		}
	)
})

app.get('/32', function (req, res){
	res.render('sectionIIIsubpartII',
		{
			title: 'III B)',
			section: 'III. Palier aux dysfonctionnements du système olfactif',
			subpart: 'B. Recherche et développement: "le nez électronique", projet'
		}
	)
})

app.get('/33', function (req, res){
	res.render('sectionIIIsubpartIII',
		{
			title: 'III C)',
			section: 'III. Palier aux dysfonctionnements du système olfactif',
			subpart: 'C.  Les limites de cette conception'
		}
	)
})

app.get('/end', function (req, res){
	res.render('conclusion',
		{
			title: 'Conclusion',
			section: '',
			subpart: ''
		}
	)
})

app.listen(port, "0.0.0.0")