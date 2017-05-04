var express = require('express');
var router = express.Router();
var db = require('../queries')
let data = [];

var localtunnel = require('localtunnel');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Project 2' });
// });



router.post('/', function(req,res,next) {
	let data = [req.body]
	res.render('index', {title: 'Library', data:data });
	console.log('anything here??', data);
})

// router.get('/', function(req,res,next) {
// 	let slack = [req.body]
// 	res.render('slack', { 
// 		token: slack.token,
// 		challenge: slack.challenge,
// 		type: slack.type
// 	})
// })

router.get('/', db.getAllResources);
router.post('/', db.createResource);
router.patch('/:id', db.upVote);



module.exports = router;
