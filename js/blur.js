
$(document).ready(function(){
	$("#trybtn").click(function(){
		if(document.getElementById("clip").style.display=="none")
		{
			$("#qrimg").stop(true,false).fadeToggle(1000,function(){
				$("#clip").stop(true,false).slideToggle(600);
			});
			$("#scantxt").stop(true,false).fadeToggle(600);
			$("#trybtn").text("Try it!");
		}
		else
		{
			$("#clip").stop(true,false).slideToggle(1000,function(){
				$("#qrimg").stop(true,false).fadeToggle(600);
				$("#scantxt").stop(true,false).fadeToggle(600);	
			});
			$("#trybtn").text("Back to video!");
			
		}
		

	});
});


