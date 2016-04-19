$(document).ready(function () {
	$('.menu').click(function(e){
		e.stopPropagation();
		$('#main_nav').toggleClass("active", 1000);
	});
});

$(document).ready(function() {
  var documentElem = $(document),
     header = $('#top_header'),
     lastScrollTop = 0;

     var myScroll;

function loaded () {
	myScroll = new IScroll('#bodyscroll', { bounceEasing: 'elastic', bounceTime: 1200 });
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  
  documentElem.on('scroll', function () {
    var currentScrollTop = $(this).scrollTop();
    if ( currentScrollTop > lastScrollTop) header.addClass('hidden');
    else header.removeClass('hidden');
    lastScrollTop = currentScrollTop;
  });
});

$(function(){
	
	var $window = $(window);		//Window object
	
	var scrollTime = 0.8;			//Scroll time
	var scrollDistance = 170;		//Distance. Use smaller value for shorter scroll and greater value for longer scroll
		
	$window.on("mousewheel DOMMouseScroll", function(event){
		
		event.preventDefault();	
										
		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,	//For more easing functions see http://api.greensock.com/js/com/greensock/easing/package-detail.html
				autoKill: true,
				overwrite: 5							
			});
					
	});
	
});



