$(function () {
	var carouselList = $('#carousel .carousel-list'),
		nextButton = $('#next'),
		prevButton = $('#prev');

	var intervalId = null;
	function setTimerInterval() {
		intervalId = setInterval(changeSlides, 2000);
	}
	setTimerInterval();

	function changeSlides() {
		carouselList.animate({'marginLeft': '-800'},500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		
		lastItem.after(firstItem);
		carouselList.css({'marginLeft': '0'});
		activeSlides();
	};

	function changeSlidesLeft() {
		var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        
        firstItem.before(lastItem);
        lastItem.animate({'marginLeft': 0}, 500);
        carouselList.css({marginLeft:0});
		activeSlides();
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
	clickedDots.click(function() {
		clearInterval(intervalId);
		dotShowSlides();
	});


	function activeSlides() {
		var currentSlide = carouselList.find("li:first");
		var selectedDots = $('.dots');
		var currentSlideId = currentSlide.attr('data-slide');

		selectedDots.each(function(index, element) {
			if((index + 1) == currentSlideId) {
				$(element).addClass('active');
			} else {
				$(element).removeClass('active');
			}	
		 });
	}

});


