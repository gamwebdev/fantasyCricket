
$("document").ready(function(){
	var sliderUL = $('div.slider').css('overflow','hidden').children('ul'),
		imgs = sliderUL.find('li.slide'),
		imgsLen = imgs.length,
		current = 1,
		totalImgsWidth = 200 * imgsLen;

	$('#slider-nav').show().find('a.arrows').on('click',function(){
		
		var direction = $(this).data('dir'),
			loc = 200;
			
		(direction === 'next') ? ++current : --current ;
		
		if( current === 0 ){                                                  
			current = imgsLen;
			loc = totalImgsWidth - 200 * 5;   // 5 denotes no. of boxes visible in a single slider
			direction = 'next';
	
		}
		else if(current - 1 === imgsLen - 4){   //  if current  = 6 then it wants to go to 6 i.e. loc = 0   . WE CAN ALSO WRITE IT AS current - 1 === 6 
			current = 1;
			loc = 0;
		}
		
		transition(sliderUL,loc,direction);
		
	});																																				
	
	function transition(container,loc,direction){																																																																																																																																
		var unit ;
		
		if (direction && loc !==0){
		unit = (direction === 'next') ? '-=' : '+=' ; 
		}
		container.animate(
		{'margin-left': unit ? (unit + loc) : loc}
		);
		
	}
	
});

/*end of slider coding*/

/*start of toogleSlider*/

	$(document).ready(function(){
  $("a.join").click(function(){
    $("#panel").slideToggle("slow");
  });
});

/*end of toogleSlider*/