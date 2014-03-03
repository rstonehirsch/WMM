
var leftMajor = null;
var rightMajor = null;
var joyride = 0;

function switchMajor(major,side){
	major = major.replace(',',' ');
	if(side=='right' || side=='rightM'){
		rightMajor=major;
		$('#rightDrop').text(major);
	}
	if(side=='left' || side=='leftM'){
		leftMajor = major;
		$('#leftDrop').text(major);
	}
	if(side=='leftM'){
		$('#leftModalDrop').text(major);
	}
	if(side=='rightM'){
		$('#rightModalDrop').text(major);
	}

	diversity();

	if(leftMajor != null && rightMajor != null && joyride==0){
		$('#myModal').foundation('reveal', 'close');
		$(document).foundation('joyride', 'start');
		joyride++;
	}

	$('#slogan').click();
}

function modal(){
	$('#myModal').foundation('reveal', 'open');
}



function academics(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id='infoRight'><h1>Academics</h1>"+lorem+"</div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id='infoLeft'><h1>Academics</h1>"+lorem+"</div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

function requirements(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id='infoRight'><h1>Major Requirements</h1>"+lorem+"</div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id='infoLeft'><h1>Major Requirements</h1>"+lorem+"</div>");
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
		$("#rightMain").append("<div id='infoRight'><h1>Faculty</h1>"+lorem+"</div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id='infoLeft'><h1>Faculty</h1>"+lorem+"</div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

function courses(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id='infoRight'><h1>Courses</h1>"+lorem+"</div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id='infoLeft'><h1>Courses</h1>"+lorem+"</div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

function jobs(){
		if(rightMajor!=null){
		$("#infoRight").remove();
		$("#rightMain").append("<div id='infoRight'><h1>Job Prospects</h1>"+lorem+"</div>");
		}
		if(leftMajor!=null){
		$("#infoLeft").remove();
		$("#leftMain").append("<div id='infoLeft'><h1>Job Prospects</h1>"+lorem+"</div>");
		}
		$(".off-canvas-wrap").removeClass("move-left");
		$(".off-canvas-wrap").removeClass("move-right");
}

var lorem = "<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu libero non magna blandit dapibus quis rhoncus urna. Integer fringilla dolor a quam consequat pharetra. Duis condimentum scelerisque diam at ultrices. Ut a ante vitae ipsum dictum ultricies eu id enim. Pellentesque mollis at enim quis pulvinar. Aenean scelerisque at risus ac mattis. Suspendisse ultricies elementum aliquam. Nunc suscipit iaculis turpis, at pretium sem fermentum nec."

	lorem+="Vestibulum scelerisque vestibulum nisi in faucibus. Quisque scelerisque vehicula ipsum, in iaculis leo elementum pulvinar. Integer sollicitudin arcu ipsum, at congue lectus commodo a. Nullam molestie est quis purus ultricies aliquet. Phasellus metus dui, rhoncus quis placerat laoreet, pulvinar ac augue. Maecenas lacinia pretium tortor, sed lobortis sapien viverra a. Donec ut faucibus magna. In posuere risus arcu, eget mattis arcu consectetur sit amet. Mauris id nunc sit amet dolor tempus porta. Morbi quis odio at nisl varius tincidunt. Sed pharetra bibendum diam, nec pulvinar justo aliquet et. Sed egestas ante vitae aliquam dignissim. Pellentesque sollicitudin lectus eget sem feugiat tincidunt. Duis vulputate facilisis augue, ac tempor nulla porttitor a. Maecenas quis orci faucibus, adipiscing justo adipiscing, rhoncus leo.</p>"

	lorem+="<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu libero non magna blandit dapibus quis rhoncus urna. Integer fringilla dolor a quam consequat pharetra. Duis condimentum scelerisque diam at ultrices. Ut a ante vitae ipsum dictum ultricies eu id enim. Pellentesque mollis at enim quis pulvinar. Aenean scelerisque at risus ac mattis. Suspendisse ultricies elementum aliquam. Nunc suscipit iaculis turpis, at pretium sem fermentum nec."

	lorem+="Vestibulum scelerisque vestibulum nisi in faucibus. Quisque scelerisque vehicula ipsum, in iaculis leo elementum pulvinar. Integer sollicitudin arcu ipsum, at congue lectus commodo a. Nullam molestie est quis purus ultricies aliquet. Phasellus metus dui, rhoncus quis placerat laoreet, pulvinar ac augue. Maecenas lacinia pretium tortor, sed lobortis sapien viverra a. Donec ut faucibus magna. In posuere risus arcu, eget mattis arcu consectetur sit amet. Mauris id nunc sit amet dolor tempus porta. Morbi quis odio at nisl varius tincidunt. Sed pharetra bibendum diam, nec pulvinar justo aliquet et. Sed egestas ante vitae aliquam dignissim. Pellentesque sollicitudin lectus eget sem feugiat tincidunt. Duis vulputate facilisis augue, ac tempor nulla porttitor a. Maecenas quis orci faucibus, adipiscing justo adipiscing, rhoncus leo.</p>"





