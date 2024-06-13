$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: true,
    autoplay: true,
    // animateOut: 'slideOutUp',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
// statistics
document.addEventListener("DOMContentLoaded", function () {
    // Rəqəmlərin artım sürətini təyin edir
    const speed = 200;
    // Hər bir statistik rəqəmi tapır
    const statisticsNumbers = document.querySelectorAll('.statistics-number');
    // Intersection Observer üçün callback funksiyası
    const animateNumbers = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const updateCount = () => {
                    const targetNumber = +target.innerText;
                    const increment = targetNumber / speed;

                    let count = 0;

                    const animate = () => {
                        count += increment;
                        if (count < targetNumber) {
                            target.innerText = Math.floor(count);
                            requestAnimationFrame(animate);
                        } else {
                            target.innerText = targetNumber;
                        }
                    };
                    animate();
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    };

    // Intersection Observer konfiqurasiyası
    const observer = new IntersectionObserver(animateNumbers, {
        threshold: 1.0
    });

    // Hər bir statistik rəqəmi müşahidə etməyə başlayır
    statisticsNumbers.forEach(number => {
        observer.observe(number);
    });
});
// statistics end

// photo and vdieo gallery
const html = document.querySelector('html');
html.setAttribute('data-bs-theme', 'dark');
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(() => {
    function doAnimations(elems) {
        const animEndEv = 'animationend';
        elems.forEach((elem) => {
            elem.classList.add('animate__animated', 'animate__flipInX');
            elem.addEventListener(animEndEv, () => {
                elem.classList.remove('animate__animated', 'animate__flipInX');
            });
        });
    }

    // Function to handle carousel animations
    function setupCarousel(carouselId) {
        const carousel = document.querySelector(carouselId);
        const firstAnimatingElems = Array.from(
            carousel.querySelector('.carousel-item:first-child')
                .querySelectorAll("[data-animation^='animated']")
        );

        doAnimations(firstAnimatingElems);

        carousel.addEventListener('slid.bs.carousel', (e) => {
            const animatingElems = Array.from(e.relatedTarget.querySelectorAll("[data-animation^='animated']"));
            doAnimations(animatingElems);
        });
    }

    // Set up both carousels
    setupCarousel('#carouselKenBurns');
    setupCarousel('#carouselKenBurns2');
});
// photo and video gallery end


// navbar
function fixMenu() {
    let imgHeight = $(".header-nav").height() + $(".logo-section").height();
    if ($(window).scrollTop() > imgHeight) {
        $(".main-navbar").css({ position: "fixed", top: "0", width: '100%', "z-index": 4 });
    } else {
        $(".main-navbar").css({ position: "sticky", top: "0", width: '100%', "z-index": 4 });
    }
}

fixMenu();

$(window).scroll(function () {
    fixMenu();
});

$(window).resize(function () {
    fixMenu();
});
// navbar end
$('.header-search-wrapper .search-main').click(function () {
    $('.search-form-main').toggleClass('active-search');
    $('.search-form-main .search-field').focus();
});

//Scroll back to top
(function ($) {
    "use strict";

    $(document).ready(function () {
        "use strict";
        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })
    });

})(jQuery);


// aos
AOS.init({
    duration: 1200,
})

// aos end