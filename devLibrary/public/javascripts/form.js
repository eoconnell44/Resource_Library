console.log('js is connected');

//Add event to the thumbs up/down to add approval rating
$('.upVote').on('click', function(e){
	//This needs to be shortened....
	let x = $(this).siblings('.likes');
	let y = x.html();
	let voteCount = parseInt(y);
	let newNum = voteCount += 1;
	let now = $(x).html(newNum)

let id = parseInt($(this).parent().attr('data-id'))
	console.log(id);
//Not recognizng likes as an integer
	// axios.patch('http://localhost:3000/'+ id, {
	// 	likes: now,
	// 	id: id
	// })
});

$('.downVote').on('click', function() {
	let x = $(this).siblings('.likes');
	let y = x.html();
	let voteCount = parseInt(y);
	let newNum = voteCount -= 1;
	$(x).html(newNum)
	console.log(newNum);
});

$('.delete').on('click', function() {
	let id = $(this).parent().attr('data-id')
	axios.delete('http://localhost:3000/'+ id)
	$(this).parent().remove();
})

// $('#likes').on('change', function() {
// 	let id = parseInt($(this).parent().attr('data-id'))
// 	let val = $(this.val());
// 		console.log(val);
// 	let num = Number.parseInt($(this).html());
// 	// let count = Number.parseInt($('#likes').html());
// 	console.log('the change function', num);
// })


