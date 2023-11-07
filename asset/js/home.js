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

    //Actives SubNav
    $(window).click(function() {
        if($('.heading-action .noti').hasClass('click') && $('.heading-action .noti .sub-noti').hasClass('open')) {
            $('.heading-action .noti').removeClass('click');
            $('.heading-action .noti .sub-noti').removeClass('open');
        };
        if($('.heading-action .write').hasClass('click') && $('.heading-action .write .sub-write').hasClass('open')) {
            $('.heading-action .write').removeClass('click');
            $('.heading-action .write .sub-write').removeClass('open');
        };
    });
    $('.heading-action .noti').click(function(event){
        event.stopPropagation();
    });
    $('.heading-action .noti .sub-noti').click(function(event){
        event.stopPropagation();
    });
    $('.heading-action .write').click(function(event){
        event.stopPropagation();
    });
    $('.heading-action .noti .sub-write').click(function(event){
        event.stopPropagation();
    });

    //
    $('.heading-action .noti').click(function() {
        $('.heading-action .noti .sub-noti').toggleClass('open');
        $(this).toggleClass('click');
    });
    $('.heading-action .write').click(function() {
        $('.heading-action .write .sub-write').toggleClass('open');
        $(this).toggleClass('click');
    });

    //Slide section
    setInterval(function() {
        $('.slide .slide-btn .next-btn').trigger('click'); //Trigger: tự động click
    }, 5000);
        //Right button
    $('.slide .slide-btn .next-btn').click(() => {
        var nextSlide = $('.active').next();    //Đằng sau slide có class "active"
        var locationSlide = $('.btn-active').index()+1;
        if (nextSlide.length != 0) {    // 1,2,3 là có slide
            //Slide đang được active
            $('.active').addClass('next-hideSlide').one('webkitAnimationEnd',() => {
                $('.next-hideSlide').removeClass('next-hideSlide').removeClass('active');
            });
            //Slide đằng sau
            nextSlide.addClass('active').addClass('next-openSlide').one('webkitAnimationEnd',() =>{
                $('.next-openSlide').removeClass('next-openSlide');
            });
            //Button li
            $('.slide-btn ul li').removeClass('btn-active');  //Xóa class active trước
            $('.slide-btn ul li:nth-child('+(locationSlide+1)+')').addClass('btn-active'); //Thêm class active vào location+1
        }else {
            //Slide đang được active
            $('.active').addClass('next-hideSlide').one('webkitAnimationEnd',() => {
                $('.next-hideSlide').removeClass('next-hideSlide').removeClass('active');
            });
            // Hết slide thì quay về slide đầu tiên
            $('.slide .slideShows .slideShow:first-child').addClass('active').addClass('next-openSlide').one('webkitAnimationEnd',() =>{
                $('.next-openSlide').removeClass('next-openSlide');
            });
            //Button li quay về vị trí đầu
            $('.slide-btn ul li').removeClass('btn-active');
            $('.slide-btn ul li:first-child').addClass('btn-active');
        }
    });
        //Left button
    $('.slide .slide-btn .prev-btn').click(()=> {
        var prevSlide = $('.active').prev();
        var locationSlide = $('.btn-active').index()+1;
        if (prevSlide.length != 0) {
            $('.active').addClass('prev-hideSlide').one('webkitAnimationEnd',() => {
                $('.prev-hideSlide').removeClass('prev-hideSlide').removeClass('active');
            });
            prevSlide.addClass('active').addClass('prev-openSlide').one('webkitAnimationEnd',() =>{
                $('.prev-openSlide').removeClass('prev-openSlide');
            });
            $('.slide-btn ul li').removeClass('btn-active');
            $('.slide-btn ul li:nth-child('+(locationSlide-1)+')').addClass('btn-active');
        }else {
            $('.active').addClass('prev-hideSlide').one('webkitAnimationEnd',() => {
                $('.prev-hideSlide').removeClass('prev-hideSlide').removeClass('active');
            });
            $('.slide .slideShows .slideShow:last-child').addClass('active').addClass('prev-openSlide').one('webkitAnimationEnd',() =>{
                $('.prev-openSlide').removeClass('prev-openSlide');
            });
            $('.slide-btn ul li').removeClass('btn-active');
            $('.slide-btn ul li:last-child').addClass('btn-active');
        }
    });

    //Course section
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

    //Support modal
    $('.support-close').click(() => {
        $('.support').addClass('close');
    });
    $('.sideBar .sB-support').click(() => {
        $('.support').removeClass('close');
    });
    $('.support').click(() => {
        $('.support').addClass('close');
    });
    $('.support-container').click((e) => {
        e.stopImmediatePropagation();
    });
});