
function switchMajor(major,side){
	major = major.replace(',',' ');
	if(side=='right'){
		$('#rightDrop').text(major);
	}
	academics();
}

function academics(){
		$("#infoLeft").remove();
		$("#infoRight").remove();
		$("#rightMain").append("<div id=infoRight><h1> Highest grade point average in McCormick! </h1><p> Average GPA: 3.68</p><p> Average hours of homework per week: 24hr. </p><p> ... </p></div>");
		$("#leftMain").append("<div id=infoLeft><h1> Highest grade point average in McCormick! </h1><p> Average GPA: 2.00</p><p> Average hours of homework per week: 24hr. </p><p> ... </p></div>");
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

function diversity(){
		$("#infoLeft").remove();
		$("#infoRight").remove();
		$("#rightMain").append("<div id='infoRight'><h1>DIVERSITY</h1><p> Gender split: 49% M / 51% F</p><p> Here's a pie chart of student diversity in this major:</p><p> Just Kidding! I don't have one</p><p> ... </p> </div>");
		$("#leftMain").append("<div id='infoLeft'><h1>DIVERSITY</h1><p> Gender split: 49% M / 51% F</p><p> Here's a pie chart of student diversity in this major:</p><p> Just Kidding! I don't have one</p><p> ... </p> </div>");
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

"<div id=infoLeft><h1> Highest grade point average in McCormick! </h1><p> Average GPA: 3.68</p><p> Average hours of homework per week: 24hr. </p><p> ... </p></div>"