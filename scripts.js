window.addEventListener('load', function() {
	var	sliders = document.querySelectorAll('.sliding-pane'),
		slidersLeft = sliders.length - 1,
		slidingPane = sliders[0],
		nextButtons = document.querySelectorAll('.next'),
		prevButtons = document.querySelectorAll('.previous');
	
	function iosSlideIn() {
		if ( slidersLeft > 0 ) {
			slidingPane.classList.add('sliding-pane--hide');
			slidingPane.nextElementSibling.classList.add('sliding-pane--slide');
			slidingPane = slidingPane.nextElementSibling;
			slidersLeft -= 1;
		}
		prevButtons[0].classList.add('show');
	}
	
	function iosSlideOut() {
		var hiddenPanes = document.querySelectorAll('.sliding-pane--hide'),
			paneToShow = hiddenPanes[ hiddenPanes.length - 1 ];
		
		paneToShow.classList.remove('sliding-pane--hide');
		paneToShow.nextElementSibling.classList.remove('sliding-pane--slide');
		slidingPane = slidingPane.previousElementSibling;
		slidersLeft += 1;
		if ( hiddenPanes.length === 1 ) {
			prevButtons[0].classList.remove('show');
		}
	}
	
	for ( var i = 0; i < nextButtons.length; i++ ) {
		nextButtons[i].addEventListener('click', iosSlideIn);
	}
	
	for ( var ia = 0; ia < prevButtons.length; ia++ ) {
		prevButtons[ia].addEventListener('click', iosSlideOut);
	}
	
});