var express = require('express');
var router = express.Router();
var db = require('../queries')
// var axios = require('axios');
let data = [];
var Slack = require('slack-api');
var localtunnel = require('localtunnel');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Project 2' });
// });


//Main page commented out while trying for SLACK
// router.post('/', function(req,res,next) {
// 	let data = [req.body]
// 	res.render('index', {title: 'Library', data:data });
// 	console.log('anything here??', data);
// })

Slack.api.test({}, function (error, data) {
  console.log(data);
});



router.get('/', db.getAllResources);
router.post('/', db.createResource);
router.patch('/:id', db.upVote);
router.delete('/:id', db.deleteResource);



module.exports = router;
