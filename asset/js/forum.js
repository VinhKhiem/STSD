$(document).ready(function() {
    //Loading
    setInterval(function() {
        $('.loading').fadeOut();
    }, 2000);

    //BackTop
    $(window).scroll(function() {
        if($(this).scrollTop() == 0){
            $('.backTop-btn').fadeOut();
        } else {
            $('.backTop-btn').fadeIn();
        }
    });
    $('.backTop-btn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    //Nav body
    $('.menu-btn').click(() => {
        $('nav').toggleClass('hide');
        $('.body-wrapper').toggleClass('expand');
        $('nav .search input').toggleClass('close');
        $('.user').toggleClass('close');
    });

    //Tus
    $('.left-main .newTus > input').click(() => {
        $('.left-main .newTus > select').removeClass('close');
        $('.left-main .post').removeClass('close');
        $('.left-main .choose').removeClass('close');
    });
    $('.left-main .choose .cancel').click(() => {
        $('.left-main .newTus > select').addClass('close');
        $('.left-main .post').addClass('close');
        $('.left-main .choose').addClass('close');
    });

    //Tips section
    $('ul.tips-content > li:first-child').click(function(){
        $('ul.tips-content > li:first-child > img').toggleClass('open');
    });
    $('ul.tips-content > li:nth-child(2)').click(function(){
        $('ul.tips-content > li:nth-child(2) > img').toggleClass('open');
    });
    $('ul.tips-content > li:nth-child(3)').click(function(){
        $('ul.tips-content > li:nth-child(3) > img').toggleClass('open');
    });
    $('ul.tips-content > li:last-child').click(function(){
        $('ul.tips-content > li:last-child > img').toggleClass('open');
    });

    //Lists
        //Thả tym
        $('.fa-solid.fa-heart').each(function() {
            $(this).click(() => {
                $(this).toggleClass('red');
            })
        });
        //Bookmark
        $('.fa-solid.fa-bookmark').each(function() {
            $(this).click(() => {
                $(this).toggleClass('gold');
            })
        });
});