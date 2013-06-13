
$(document).ready(function(){
	$("#trybtn").click(function(){	
		$("#clip").stop(true,false).fadeToggle(0,function(){
			$("#qrimg").stop(true,false).fadeToggle(600);
				$("#scantxt").stop(true,false).fadeToggle(600);	
		});
		$("#trybtn").css({"display":"none"});
	});
});


