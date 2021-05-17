let galeryIndex;
//  MAIN
$(document).ready(function() {
    $('#burger-open').click(function() {
        $('.burger').toggleClass('active');
        if ($('.burger').hasClass('active')) {
            $('.burger-nav').css({'width' : '60%', 'transition' : 'width .7s'});
            $('body').css('overflow', 'hidden');
        } else {
            $('.burger-nav').css('width', '0');
            $('body').css('overflow', 'visible');
        }
    });

    // GALERY
    $('.galery-item').click(function() {
        galeryIndex = $('.galery-item').index(this);
        galeryIndex += 1;
        showGalery(galeryIndex);
        $('.galery-modal').removeClass('disable');
    });

    $('.galery-modal-close').click(function() {
        $('.galery-modal').addClass('disable');
    });

    $('.arrow-prev').click(function() {
        galeryIndex -= 1;
        showGalery(galeryIndex);
    });
    $('.arrow-next').click(function() {
        galeryIndex += 1;
        showGalery(galeryIndex);
    });


    accordion();
    changeMobile();
    menuBg();
    scrollLink();

    // SLIDER
    $('.reviews-row').slick({
        dots: true,
        speed: 300,
        draggable: false,
        waitForAnimate: false,
    });
    addHover();
});


// ACCORDION
function accordion() {
    $('.accordion-title h3').click(function() {
        $(this).parent().next().slideToggle('slow');
        $(this).parent().toggleClass('accordion--active').toggleClass('accordion--hover');
    });
};

// MAKE SMALLER LOGO AND BURGER MENU
function changeMobile() {
    let w = $(window).innerWidth();
    preChangeMobile(w);
    $(window).resize(function() {
        w = $(this).innerWidth();
        preChangeMobile(w);
    });
}

function preChangeMobile(w) {
    if (w <= 500) {
        $('#logo').attr('src', 'img/logo-mobile.png');
        $('.burger').addClass('burger-mobile');
        $('.burger-line').addClass('burger-line-mobile');
    } else {
        $('#logo').attr('src', 'img/logo.png');
        $('.burger').removeClass('burger-mobile');
        $('.burger-line').removeClass('burger-line-mobile');
    }
}

// CHANGE MENU BG, PADDING, NAV:HOVER
function menuBg() {
    let h = 0;
    $(window).scroll(function() {
        h = $(this).scrollTop();
        if (h >= 100) {
            $('.menu').css('background', 'rgba(0, 0, 0, .9');
            $('.nav__item').hover(function() {
                $(this).css('color', '#f7654a');
            }, function() {
                $(this).css('color', '#fff');
            });
            widthScrollPlus();
        } else {
            $('.menu').css('background', 'rgb(247, 101, 74');
            $('.nav__item').hover(function() {
                $(this).css('color', '#000');
            }, function() {
                $(this).css('color', '#fff');
            });
            widthScrollMinus();
        }
    });
}

function widthScrollPlus() {
    let w = $(window).innerWidth();
    if (w > 1135) {
        $('.menu-row').css('padding', ' 24px 0 10px 0');
    } else {
        $('.menu-row').css('padding', ' 24px 10px 10px 10px');
    }

    $(window).resize(function() {
        w = $(this).innerWidth();
        if (w > 1135) {
            $('.menu-row').css('padding', ' 24px 0 10px 0');
        } else {
            $('.menu-row').css('padding', ' 24px 10px 10px 10px');
        }
    });
}

function widthScrollMinus() {
    let w = $(window).innerWidth();
    if (w > 1135) {
        $('.menu-row').css('padding', ' 24px 0 29px 0');
    } else {
        $('.menu-row').css('padding', ' 24px 10px 29px 10px');
    }
    $(window).resize(function() {
        w = $(this).innerWidth();
        if (w > 1135) {
            $('.menu-row').css('padding', ' 24px 0 29px 0');
        } else {
            $('.menu-row').css('padding', ' 24px 10px 29px 10px');
        }
    });
}

// SCROLL LINK
function scrollLink() {
    $('[data-link]').click(function() {
        let linkName = $(this).attr('data-link');
        let linkHeight = $(linkName).offset().top;
        let burgerMenu = $('.burger-nav');
        if (burgerMenu.css('width') > '0') {
            burgerMenu.css({'width' : '0', 'transition' : '.3s'});
            $('body').css('overflow', 'visible');
            $('.burger').removeClass('active');
        };
        $('body, html').animate({scrollTop : linkHeight - 99}, 500);
    });
};

// ADD/REMOVE HOVER
function addHover() {
    checkHover();
    $(window).resize(function() {
        checkHover();
    });
}

function checkHover() {
    let w = $(window).innerWidth();
    if (w <= 700) {
        $('.hover').removeClass('hover-active');
        $('.reviews .slick-prev').removeClass('hover-active');
        $('.reviews .slick-next').removeClass('hover-active');
    } else {
        $('.hover').addClass('hover-active');
        $('.reviews .slick-prev').addClass('hover-active');
        $('.reviews .slick-next').addClass('hover-active');
    }

    
}

function showGalery(n) {
    let i;
    let galery = $('.galery-slider-item');
    
    if (n > galery.length) {
        galeryIndex = 1;
    }
    if (n <= 0) {
        galeryIndex = galery.length;
    }

    for (i = 0; i < galery.length; i++) {
        $(galery[i]).addClass('disable');
    }

    $('.galery-item-text').text(galeryIndex + ' / ' + galery.length);
    $(galery[galeryIndex - 1]).removeClass('disable');
    $('.galery-slider-img').addClass('anim');
}