(function ($) {
    "use strict"

    /* 1. Proloder */
    $(window).on('load', function () {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });

        // todo: разобраться с загрузкой модалов
        $(".modal-wrapper-members").load("_members-modal.html");
        $(".modal-wrapper-login").load("_login-modal.html");
        $(".modal-wrapper-add-member").load("_add-staff-modal.html");

        $("header").load("_header.html");

        $("footer").load("_footer.html");

        let contentToLoad = 'main-page.html'
        switch (true) {
            case window.location.pathname.includes('details'): contentToLoad = '_details.html'; break;
            case window.location.pathname.includes('category'): contentToLoad = '_category.html'; break;
            case window.location.pathname.includes('profile'): contentToLoad = '_profile.html'; break;
            case window.location.pathname.includes('settings'): contentToLoad = '_settings.html'; break;
            case window.location.pathname.includes('create'): contentToLoad = '_create.html'; break;
            case window.location.pathname.includes('members'): contentToLoad = '_members.html'; break;
            default: contentToLoad = 'main-page.html';
        }

        $("main").load(contentToLoad, function () {


            $('.tag-remove').click(function (event) {
                console.log('test', event.currentTarget);
                //todo: endpoint to delete tag with data in 'event'

            });

            $('.add-comment').click(function (event) {
                let text = $('.comment-text')[0] ? $('.comment-text')[0].value : '';
                if (!text) return;
                //todo: endpoint to add comment
                console.log('submitting comment:', text);
            });

            $('.add-memeber').click(function (event) {
                console.log('adding memeber')
                $('.modal-add-member').modal('show');
            });


            $('.btn-login').click(function () {
                $('.modal-login').modal('show');
            });

            $('.add-staff').click(function () {
                $('.add-staff-modal').modal('show');
            })

            /* мобильное меню */
            var menu = $('ul#navigation');
            if (menu.length) {
                menu.slicknav({
                    prependTo: ".mobile_menu",
                    closedSymbol: '+',
                    openedSymbol: '-',
                    iconClass: 'fas fa-bars'
                });
            };

            // добавление ответа под комментарием
            $('.comment-btn.comment-reply').click(function (event) {
                var parentElement = $(event.target).parents('.user')[0]
                $("<div class='comment-container'></div>").insertAfter(parentElement);

                console.log($(".comment-container"));
                $(".comment-container").load('_comment-reply-form.html');
            });
            $('.comment-btn.comment-delete').click(function () {
                console.log('delete comment')
            });
            $('.comment-btn.comment-edit').click(function () {
                console.log('edit comment')
            });


        });
    });

    var nice_Select = $('select');
    if (nice_Select.length) {
        nice_Select.niceSelect();
    }

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky ").removeClass("sticky-bar");
        } else {
            $(".header-sticky").addClass("sticky-bar");
        }
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-flex").removeClass("sticky-flex");
        } else {
            $(".header-flex").addClass("sticky-flex");
        }
    });

    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });


    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });




    $('.sticky-logo').addClass('info-open');


    // Remove clas
    $('.close-icon').click(function () {
        $('.extra-inofo-bar').removeClass('info-open');
    })

})(jQuery);

