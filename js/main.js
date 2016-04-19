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

// document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
  
  documentElem.on('scroll', function () {
    var currentScrollTop = $(this).scrollTop();
    if ( currentScrollTop > lastScrollTop) header.addClass('hidden');
    else header.removeClass('hidden');
    lastScrollTop = currentScrollTop;
  });
});

