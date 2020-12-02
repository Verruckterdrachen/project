$(document).ready(function() {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });

    closeBtn.on('click', function() {
        modal.toggleClass('modal--visible');
    });

    $(document).keyup(function (keyClose) {
        // 27 - keyCode
        if (keyClose.which == 27 && modal.hasClass("modal--visible")) {
            modal.toggleClass('modal--visible');
        }
    });

    $(document).click(function (keyClose) {
        if ($(keyClose.target).is('.modal')) {
            modal.toggleClass('modal--visible')
        }
    });
    
    $(document).ready(function(){
        $(function(){
            if ($(window).width() > 900){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 900) {
                $('.header__scroll-up').animate({
                    opacity: 1
                }, 1);
            } else {
                $('.header__scroll-up').animate({
                    opacity: 0
                }, 1);
    
            }
        });
    }
    });
        $('.header__scroll-up').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
        
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10);
    bullets.css('left', prev.width() + 10);

    var next = $('.steps-button-next');
    var prev = $('.steps-button-prev');
    var bullets = $('.steps-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10);
    bullets.css('left', prev.width() + 10);

    new WOW().init();

    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
            userEmail: {
                required: true,
                email: true
            }
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите e-mail",
                email: "Введите в формате: name@domain.com"
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function(response) {
                    alert('Форма оправлена, за вами уже выехали.');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                },
                error: function(response) {
                    console.error('Ошибка запроса ' + response);
                }
            });
        }
    });

    $('.footer__form').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв"
            },
            userPhone: "Телефон обязателен",
        }
    });
    $('.control__form').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв"
            },
            userPhone: "Телефон обязателен",
        }
    });
    $('.request__form').validate({
        errorClass: "invalid",
        rules: {
            userName: {
                required: true,
                minlength: 2
            },
            userPhone: "required",
        },
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв"
            },
            userPhone: "Телефон обязателен",
        }
    });
    

    $('[type=tel]').mask('+7(000)-000-00-00', { placeholder: "+7(___)-___-__-__" });

    var player;

    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '465',
          width: '100%',
          videoId: 'Gqtc1AenRXA',
          events: {
            'onReady': videoPlay,
          }
        });
      })

      function videoPlay (event) {
          event.target.playVideo();
      }

});




