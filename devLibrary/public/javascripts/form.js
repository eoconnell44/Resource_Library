console.log('js is connected');

//Add event to the thumbs up/down to add approval rating
$('#upVote').on('click', function(){
	let voteCount = Number.parseInt($('#likes').html());
	// voteCount += 1;
	$('#likes').html(voteCount += 1); 
	// console.log(voteCount);
	// let newNum = $('#likes').html(voteCount += 1); 

	// axios.patch('http://localhost:3000/', {
	// 	likes: newNum
	// })
});

$('#downVote').on('click', function() {
	let voteCount = Number.parseInt($('#likes').html());
	$('#likes').html(voteCount -= 1); 
});

// $('#likes').on('change', function() {
// 	let id = parseInt($(this).parent().attr('data-id'))
// 	let val = $(this.val());
// 		console.log(val);
// 	let num = Number.parseInt($(this).html());
// 	// let count = Number.parseInt($('#likes').html());
// 	console.log('the change function', num);
// })


