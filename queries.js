//Used to connect db with all functions
var promise = require('bluebird'); //Calling to require bluebird library pgp
var options = {
  promiseLib: promise
};
//loading and init this library
var pgp = require('pg-promise')(options); //passing options object to pgp
//Port that postgres listens to
var connString = 'postgres://localhost:5432/library_resources';
var db = pgp(connString);
let heroku = 'https://intense-ocean-96459.herokuapp.com/';

function createResource(req,res,next){
	console.log('new item', req.body)
	db.none('insert into resources(title, subject, link)' +
	'values(${title}, ${subject}, ${link})', req.body)
	.then(res.redirect('/'))
	.catch(function(err) {
		return next(err);
	});
}

function getAllResources(req,res,next){
	//selecting db.any to return data to page
	db.any('select * from resources')
	.then(function(data) {
		console.log('work on refrsh', data);
		res.render('index', {title: 'All resources', data:data })
	})
}

function upVote (req,res,next) {
	//Just need to update the db, nothing new added to page
	db.none('update resources set likes = $1 where id = $2',
		[req.body.likes, parseInt(req.params.id)])
	.then(function() {
		res.status(200)
	})
}

function getOneResource(){
	console.log('got this item');

}

function updateResource() {

}

function deleteResource() {
	let resourceId = parseInt(req.params.id)
	console.log(resourceId);
	db.result('delete from contacts where id = $1', resourceId)
}

// function querySub(req,res,next) {
// 	let query = $('.search').val();
// 	console.log(query);
// }

//exporting all of the functions
module.exports = {
	createResource: createResource,
	getAllResources: getAllResources,
	upVote: upVote,
	deleteResource: deleteResource,
	// getOneResource: getOneResource,
}