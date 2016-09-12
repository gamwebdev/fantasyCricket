

$("document").ready(function(){

	$(".filterTabs_WK").bind("click",sel);
	
		function sel(){
				
				
				$('.filterTabs_WK').css("background-color","white");
				$('.filterTabs_BAT').css("background-color","#f5f1ee");
				$('.filterTabs_ALL').css("background-color","#f5f1ee");
				$('.filterTabs_BOWL').css("background-color","#f5f1ee");
				$('.filterTabs_ALLPLAY').css("background-color","#f5f1ee");
				
				$($('.WK_ptype')).css("display","table-row");
				$($('.BAT_ptype')).css("display","none");
				$($('.ALL_ptype')).css("display","none");
				$($('.BOWL_ptype')).css("display","none");
				
					
		}
	

});

// END OF WK FILTERTAB

$("document").ready(function(){

	$(".filterTabs_BAT").bind("click",sel);
	
		function sel(){
				
				
				$('.filterTabs_WK').css("background-color","#f5f1ee");
				$('.filterTabs_BAT').css("background-color","white");
				$('.filterTabs_ALL').css("background-color","#f5f1ee");
				$('.filterTabs_BOWL').css("background-color","#f5f1ee");
				$('.filterTabs_ALLPLAY').css("background-color","#f5f1ee");
				
				$($('.WK_ptype')).css("display","none");
				$($('.BAT_ptype')).css("display","table-row");
				$($('.ALL_ptype')).css("display","none");
				$($('.BOWL_ptype')).css("display","none");
					
		}
	

});

$("document").ready(function(){

	$(".filterTabs_ALL").bind("click",sel);
	
		function sel(){
				
				
				$('.filterTabs_WK').css("background-color","#f5f1ee");
				$('.filterTabs_BAT').css("background-color","#f5f1ee");
				$('.filterTabs_ALL').css("background-color","white");
				$('.filterTabs_BOWL').css("background-color","#f5f1ee");
				$('.filterTabs_ALLPLAY').css("background-color","#f5f1ee");
				
				$($('.WK_ptype')).css("display","none");
				$($('.BAT_ptype')).css("display","none");
				$($('.ALL_ptype')).css("display","table-row");
				$($('.BOWL_ptype')).css("display","none");
					
		}
	

});

$("document").ready(function(){

	$(".filterTabs_BOWL").bind("click",sel);
	
		function sel(){
				
				
				$('.filterTabs_WK').css("background-color","#f5f1ee");
				$('.filterTabs_BAT').css("background-color","#f5f1ee");
				$('.filterTabs_ALL').css("background-color","#f5f1ee");
				$('.filterTabs_BOWL').css("background-color","white");
				$('.filterTabs_ALLPLAY').css("background-color","#f5f1ee");
				
				$($('.WK_ptype')).css("display","none");
				$($('.BAT_ptype')).css("display","none");
				$($('.ALL_ptype')).css("display","none");
				$($('.BOWL_ptype')).css("display","table-row");
					
		}
	

});


$("document").ready(function(){

	$(".filterTabs_ALLPLAY").bind("click",sel);
	
		function sel(){
				
				
				$('.filterTabs_WK').css("background-color","#f5f1ee");
				$('.filterTabs_BAT').css("background-color","#f5f1ee");
				$('.filterTabs_ALL').css("background-color","#f5f1ee");
				$('.filterTabs_BOWL').css("background-color","#f5f1ee");
				$('.filterTabs_ALLPLAY').css("background-color","white");
				
				$($('.playerRow')).css("display","table-row");
				
					
		}
	

});


// END OF ALL PLAYERS



/*

$("document").ready(function(){
											// WHAT IS WRONG IN THE CODE									
	$("li").bind('click',sell);	
			
		function sell (){
				var partClass = $(this).data('ftype');
				
					console.log(partClass);
				
				var ptype = partClass + '_ptype';
				
				console.log(ptype);
				
				$('.ptype').css('display','table-row');	
				
		}		

});


*/



$("document").ready(function(){
	 $(".playerRow").bind("click",sel);
	 
	 function sel(){
		 
		 $($(this)).addClass('active');
		 
		 
		 
		 $($(this)).click(function(){
			 $($(this)).removeClass('active');
			 $('.bw1').removeClass('bw1h');
			 
			 $(".playerRow").bind("click",sel);
			 
		 });
		 
		 
	 }
	 
});



$("document").ready(function(){

	$(".WK_ptype").bind("click",Display);
	
		function Display(){
			$('.wc1').css('backgroundImage','url(wicketKeeperGlow.jpg)');
			
			$($(this)).click(function(){
				$('.wc1').css('backgroundImage','');
					$(".WK_ptype").bind("click",Display);
			});
				
		}

});


// end of keeper


$("document").ready(function(){

	$(".BAT_ptype").bind("click",Display1);
	
		function Display1(){
			$('.bt1').css('backgroundImage','url(batsmanGlow.jpg)');
			
			$(".BAT_ptype").bind("click",Display2);
	
				function Display2(){
					$('.bt2').css('backgroundImage','url(batsmanGlow.jpg)');
					
					$(".BAT_ptype").bind("click",Display3);
	
					function Display3(){
						$('.bt3').css('backgroundImage','url(batsmanGlow.jpg)');
						
						$(".BAT_ptype").bind("click",Display4);
	
							function Display4(){
								$('.bt4').css('backgroundImage','url(batsmanGlow.jpg)');
								
								$(".BAT_ptype").bind("click",Display5);
	
									function Display5(){
										$('.bt5').css('backgroundImage','url(batsmanGlow.jpg)');
										
										
										
										$($(this)).click(function(){
											$('.bt5').css('backgroundImage','');
												$(".BAT_ptype").bind("click",Display5);
										});
											
									}
								
								
								
								
								
								
								$($(this)).click(function(){
									$('.bt4').css('backgroundImage','');
										$(".BAT_ptype").bind("click",Display4);
								});
									
							}

								
						
						
						
						
						
						$($(this)).click(function(){
							$('.bt3').css('backgroundImage','');
								$(".BAT_ptype").bind("click",Display3);
						});
							
					}
					
					
					
					
					
					$($(this)).click(function(){
						$('.bt2').css('backgroundImage','');
							$(".BAT_ptype").bind("click",Display2);
					});
						
				}
			
			
			
			
			$($(this)).click(function(){
				$('.bt1').css('backgroundImage','');
					$(".BAT_ptype").bind("click",Display1);
			});
				
		}

});


// END OF BATSMAN



$("document").ready(function(){

	$(".BOWL_ptype").bind("click",Display1);
	
		function Display1(){
			$('.bw1').css('backgroundImage','url(bowlerGlow.jpg)');
			
			$(".BOWL_ptype").bind("click",Display2);
	
				function Display2(){
					$('.bw2').css('backgroundImage','url(bowlerGlow.jpg)');
					
					$(".BOWL_ptype").bind("click",Display3);
	
					function Display3(){
						$('.bw3').css('backgroundImage','url(bowlerGlow.jpg)');
						
						$(".BOWL_ptype").bind("click",Display4);
	
							function Display4(){
								$('.bw4').css('backgroundImage','url(bowlerGlow.jpg)');
								
								$(".BOWL_ptype").bind("click",Display5);
	
									function Display5(){
										$('.bw5').css('backgroundImage','url(bowlerGlow.jpg)');
										
										
										
										$($(this)).click(function(){
											$('.bw5').css('backgroundImage','');
												$(".BOWL_ptype").bind("click",Display5);
										});
											
									}
								
								
								
								
								
								
								$($(this)).click(function(){
									$('.bw4').css('backgroundImage','');
										$(".BOWL_ptype").bind("click",Display4);
								});
									
							}

								
						
						
						
						
						
						$($(this)).click(function(){
							$('.bw3').css('backgroundImage','');
								$(".BOWL_ptype").bind("click",Display3);
						});
							
					}
					
					
					
					
					
					$($(this)).click(function(){
						$('.bw2').css('backgroundImage','');
							$(".BOWL_ptype").bind("click",Display2);
					});
						
				}
			
			
			
			
			$($(this)).click(function(){
				$('.bw1').css('backgroundImage','');
					$(".BOWL_ptype").bind("click",Display1);
			});
				
		}

});


//end of bowler


$("document").ready(function(){

	$(".ALL_ptype").bind("click",Display1);
	
		function Display1(){
			$('.fd1').css('backgroundImage','url(allRounderGlow.jpg)');
			
			$(".ALL_ptype").bind("click",Display2);
	
				function Display2(){
					$('.fd2').css('backgroundImage','url(allRounderGlow.jpg)');
					
					$(".ALL_ptype").bind("click",Display3);
	
					function Display3(){
						$('.fd3').css('backgroundImage','url(allRounderGlow.jpg)');
																	
						
						
						$($(this)).click(function(){
							$('.fd3').css('backgroundImage','');
								$(".ALL_ptype").bind("click",Display3);
						});
							
					}
					
					
					
					
					
					$($(this)).click(function(){
						$('.fd2').css('backgroundImage','');
							$(".ALL_ptype").bind("click",Display2);
					});
						
				}
			
			
			
			
			$($(this)).click(function(){
				$('.fd1').css('backgroundImage','');
					$(".ALL_ptype").bind("click",Display1);
			});
				
		}

});

// end of ALLROUNDER



/*

$("document").ready(function(){


		 $(".playerRow").bind("click",sel);
		 
		 
		
			function sel(){
				
				
				$($(this)).css("background-color","#D3D3D3");
					
					$($(this)).click(function(){
						$($(this)).css("background-color","white");

						$(".playerRow").bind("click",sel);
					});
					
			}
	
});

*/




