$(function() {
    var carouselList = $('#carousel .carousel-list'),
        nextButton = $('#next'),
        prevButton = $('#prev'),
    	interval = null;

    function setTimerInterval() {
        interval = setInterval(changeSlides, 3000);
    }
    setTimerInterval();

    function changeSlides() {
        carouselList.animate({
            'marginLeft': -800
        }, 500, moveFirstSlide);
    };

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first"),
            lastItem = carouselList.find("li:last");

        lastItem.after(firstItem);
        carouselList.css({
            'marginLeft': '0'
        });
        activeSlides();
    };

    function changeSlidesLeft() {
        var firstItem = carouselList.find("li:first"),
            lastItem = carouselList.find("li:last");

        firstItem.before(lastItem);
        lastItem.animate({
            'marginLeft': 0
        }, 500);
        carouselList.css({
            marginLeft: 0
        });
        activeSlides();
    };

    //controlers
    nextButton.click(function() {
        clearInterval(interval);
        changeSlides();
        setTimerInterval();
    });
    prevButton.click(function() {
        clearInterval(interval);
        changeSlidesLeft();
        setTimerInterval();
    });

    //indicators
    function activeSlides() {
        var currentSlide = carouselList.find("li:first"),
            selectedDot = $('.dots'),
            currentSlideId = currentSlide.attr('data-slide');

        selectedDot.each(function(index, element) {
            if ((index + 1) == currentSlideId) {
                $(element).addClass('active');
            } else {
                $(element).removeClass('active');
            }
        });
    }

    var selectedDot = $('.dots');
    selectedDot.click(function() {
        var firstItem = carouselList.find("li:first"),
            currentSlide = firstItem.attr('data-slide'),
            clickedDot = $(this).attr('data-slide');

        clearInterval(interval);
        if (currentSlide < clickedDot) {
            var numberOfSlides = clickedDot - currentSlide;
            for (var i = 0; i < numberOfSlides; i++) {
                moveFirstSlide();
            }
        } else if (currentSlide > clickedDot) {
            var numberOfSlides = currentSlide - clickedDot;
            for (var i = 0; i < numberOfSlides; i++) {
                changeSlidesLeft();
            }
        }
        setTimerInterval();
    });
});