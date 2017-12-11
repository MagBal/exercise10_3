$(function () {
	var carouselList = $('#carousel .carousel-list'),
		nextButton = $('#next'),
		prevButton = $('#prev');
			
	var intervalId = null;
	function setTimerInterval() {
		intervalId = setInterval(changeSlides, 4000);
	}
	setTimerInterval();

	function changeSlides() {
		carouselList.animate({'marginLeft': -800}, 500, moveFirstSlide());
		activeSlides();
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		var item = carouselList.find("li");

		lastItem.after(firstItem);
		carouselList.css({marginLeft: 0});
	};

	function changeSlidesLeft() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.remove().css({'marginLeft': -800});
		firstItem.before(lastItem);
		lastItem.animate({'marginLeft': 0}, 500);
	};

	//controlers
	nextButton.click(function() {
		clearInterval(intervalId);
		changeSlides();
	});
	prevButton.click(function() {
		clearInterval(intervalId);
		changeSlidesLeft();
	});
	
	
	//indicators

	function activeSlides() {
			var currentSlide = carouselList.find("li:first");
			var selectedDots = $('.dots');
			var currentSlideNumber = currentSlide.attr('data-slide');

			selectedDots.each(function(index, element) {
				if(index == currentSlideNumber) {
					$(element).addClass('active');
				} else {
					$(element).removeClass('active');
				}	
		 	});
	};		 	

});



	




