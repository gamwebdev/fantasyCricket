$(document).ready(function(){
	
  if($(".player_2").bind('click',filter)){
  function filter(){
	$(".leagueSize_4").css("display","none");
	$(".leagueSize_10").css("display","none");
	$(".leagueSize_50").css("display","none");
	$(".leagueSize_100").css("display","none");
  }
  
  }else if($(".player_4").bind('click',filter)){
	function filter(){
	$(".leagueSize_2").css("display","none");
	$(".leagueSize_10").css("display","none");
	$(".leagueSize_50").css("display","none");
	$(".leagueSize_100").css("display","none");
  }
  
  }else if($(".player_10").bind('click',filter)){
  function filter(){
	$(".leagueSize_2").css("display","none");
	$(".leagueSize_4").css("display","none");
	$(".leagueSize_50").css("display","none");
	$(".leagueSize_100").css("display","none");
  }
	
  }else if($(".player_50").bind('click',filter)){
  	
	function filter() {
	$(".leagueSize_4").css("display","none");
	$(".leagueSize_10").css("display","none");
	$(".leagueSize_2").css("display","none");
	$(".leagueSize_100").css("display","none");
  }
  }else if($(".player_50").bind('click',filter)){
	
	 function filter(){
	$(".leagueSize_4").css("display","none");
	$(".leagueSize_10").css("display","none");
	$(".leagueSize_50").css("display","none");
	$(".leagueSize_2").css("display","none");
  }
  
  }
  
});

