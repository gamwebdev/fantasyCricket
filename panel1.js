$(document).ready(function(){
		
	
	$('.player_ALL').click(function(){
		$('.leagueSize_2').show();
		$('.leagueSize_4').show('1000');
		$('.leagueSize_10').show('1000');
		$('.leagueSize_50').show('1000');
		$('.leagueSize_100').show('1000');
	});
		
		
	$('.player_2').click(function(){
		$('.leagueSize_2').show();
		$('.leagueSize_4').hide('1000');
		$('.leagueSize_10').hide('1000');
		$('.leagueSize_50').hide('1000');
		$('.leagueSize_100').hide('1000');
	});
	
		$('.player_4').click(function(){
		$('.leagueSize_4').show();
		$('.leagueSize_2').hide('1000');
		$('.leagueSize_10').hide('1000');
		$('.leagueSize_50').hide('1000');
		$('.leagueSize_100').hide('1000');
	});
	
		$('.player_10').click(function(){
		$('.leagueSize_10').show();
		$('.leagueSize_4').hide('1000');
		$('.leagueSize_2').hide('1000');
		$('.leagueSize_50').hide('1000');
		$('.leagueSize_100').hide('1000');
	});
	
		$('.player_50').click(function(){
		$('.leagueSize_50').show();
		$('.leagueSize_4').hide('1000');
		$('.leagueSize_10').hide('1000');
		$('.leagueSize_2').hide('1000');
		$('.leagueSize_100').hide('1000');
	});
	
		$('.player_100').click(function(){
		$('.leagueSize_100').show();
		$('.leagueSize_4').hide('1000');
		$('.leagueSize_10').hide('1000');
		$('.leagueSize_50').hide('1000');
		$('.leagueSize_2').hide('1000');
	});
	
});