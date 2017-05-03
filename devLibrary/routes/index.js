var express = require('express');
var router = express.Router();
var db = require('../queries')
let data = [];


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Project 2' });
// });

// router.post('/', function(req,res,next) {
// 	let data = [req.body]
// 	res.render('index', {title: 'Library', data:data });
// 	console.log('anything here??', data);
// })

router.get('/', db.getAllResources);
router.post('/', db.createResource);



module.exports = router;
