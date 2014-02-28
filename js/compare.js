
var leftMajor = null;
var rightMajor = null;

function switchMajor(major,side){
	major = major.replace(',',' ');
	if(side=='right'){
		rightMajor=major;
		$('#rightDrop').text(major);
	}
	if(side=='left'){
		leftMajor = major;
		$('#leftDrop').text(major);
	}
	academics();
}

function academics(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id=infoRight><h1> Highest grade point average in McCormick! </h1><p> Average GPA: 3.68</p><p> Average hours of homework per week: 24hr. </p><p> ... </p></div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id=infoLeft><h1> Highest grade point average in McCormick! </h1><p> Average GPA: 2.00</p><p> Average hours of homework per week: 24hr. </p><p> ... </p></div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

function requirements(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id=infoRight><h1> The following is required to complete this major:</h1><h4>Breadth</h4><p>1 course in each of the following fields:</p><p>Random Subject</p><p> ... </p></div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id=infoLeft><h1> The following is required to complete this major:</h1><h4>Breadth</h4><p>1 course in each of the following fields:</p><p>Random Subject</p><p> ... </p></div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}



function diversity(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id='infoRight'><h1>DIVERSITY</h1><h3> Gender split</h3> <img src=img/gender.jpg></img><p> Here's a pie chart of student diversity in this major:</p><img src=img/ethnic.gif></img><p> ... </p> </div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id='infoLeft'><h1>DIVERSITY</h1><h3> Gender split</h3> <img src=img/gender.jpg></img><p> Here's a pie chart of student diversity in this major:</p><img src=img/ethnic.gif><p> ... </p> </div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

function faculty(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id='infoRight'><h1>FACULTY</h1><h3>We have a Multitude of great professors!</h3><h5>Department Head:</h5><p>Professor Intelligence</p><p> ... </p> </div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id='infoLeft'><h1>FACULTY</h1><h3>We have a Multitude of great professors!</h3><h5>Department Head:</h5><p>Professor Intelligence</p><p> ... </p> </div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}





