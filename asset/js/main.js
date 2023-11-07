$(document).ready(function() {
    //Loading
    setInterval(function() {
        $('.loading').fadeOut();
    }, 2000);

    //Modal
    $('.menu li a').click(() => {
        $('.modal').removeClass('close');
    });
    $('.text-content a').click(() => {
        $('.modal').removeClass('close');
    });
    $('.modal-container .modal-choose a:first-child').click(() => {
        $('.modal').addClass('close');
    });
    $('.modal').click(() => {
        $('.modal').addClass('close');
    });
    $('.modal-container').click((e) => {
        e.stopImmediatePropagation();
    });
})