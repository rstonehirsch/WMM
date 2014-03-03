
var i=2;

var qArr = new Array();
qArr[1]=null;
qArr[2]= "<h1 id='questionText'>Do you have experience programming?</h1>"
qArr[3]= "<h1 id='questionText'>Would you consider yourself a visual learner?</h1>"
qArr[4]= "<h1 id='questionText'>Do you like to work with your hands and build?</h1>"
qArr[5]= "<h1 id='questionText'>Do you prefer to lectures to readings?</h1>"
qArr[6]= "<h1 id='questionText'>Do you like hiking an nature?</h1>"
qArr[7]= "<h1 id='questionText'>Do you see yourself working in a hospital?</h1>"
qArr[8]= "<h1 id='questionText'>Do you enjoy hours and hours of endless work?</h1>"
qArr[9]= "<h1 id='questionText'>Have you ever failed a chemistry class?</h1>"
qArr[10]= "<h1 id='questionText'>Are you interested in community service?</h1>"



function answer(ans){
	$('#questionText').remove();
	if(i<=10){
	$('#questionDiv').append(qArr[i]);
	$('#count').text('Question '+i+' of 10:')
	i++;
	}
	if(i==11){
		$('#myModal').foundation('reveal', 'open');
	}
}
