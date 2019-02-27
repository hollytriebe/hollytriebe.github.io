$(document).ready(function(){
	console.log("ready");
	 $(".topred").hover(function() {
    	$(".topred").toggleClass("reddown"); 
	  });

	 $(".curtain").click(function(){
	 	$(".curtain").addClass("active");
	 })

	 $(".topred").click(function(){
	 	$(".numbercircle").addClass("active");
	 	$(".number").addClass("active");
	 	$(".smile").addClass("active");
	 	$(".flashboxleft").addClass("active");
	 	$(".flashboxright").addClass("active");
	 	$(".strip").addClass("active");
	 	  setTimeout(function(){
	 		$(".numbercircle").removeClass("active");
	 		$(".number").removeClass("active");
	 		$(".smile").removeClass("active");
	 		$(".flashboxleft").removeClass("active");
	 		$(".flashboxright").removeClass("active");
	 		$(".strip").removeClass("active");
  		}, 19000);
	 })
});