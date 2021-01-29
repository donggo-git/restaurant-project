$(document).ready(function () {
    let move = 0;
    const y = -30;
    $(".next").click(function () {

        move += 1;
        $('.slide').css('transition', 'all 0.5s')
        $('.slide').css('transform', `translateX(${-move * 30 + y}vw)`)

    });
    $(".previous").click(function () {
        move -= 1;
        $('.slide').css('transition', 'all 0.5s')
        $('.slide').css('transform', `translateX(${-move * 30 + y}vw)`)

    });
    $('.slide').on('transitionend', function () {
        if (move == 3) {
            move = 0
            $('.slide').css('transition', 'none');
            $('.slide').css('transform', `translateX(${-move * 30 + y}vw)`)
        }
        else if (move == -1) {
            move = 2;
            $('.slide').css('transition', 'none');
            $('.slide').css('transform', `translateX(${-move * 30 + y}vw)`);

        }
    })


    $('.item-name').click(function () {

        if ($(this).parent().hasClass('is-not-active')) {
            $(this).parent().animate({ 'min-height': "5.8rem" })
            $(this).parent().children('.item-deital').addClass('item-deital-active')
            $(this).parent().removeClass('is-not-active')
        }
        else {
            $(this).parent().animate({ 'min-height': "1.2rem" })
            $(this).parent().children('.item-deital').removeClass('item-deital-active')
            $(this).parent().addClass('is-not-active')
        }
    })
    $('.slide-item').click(function () {

        //final class of slide-item
        let thisId = $(this).attr('name')
        if ($('.' + thisId).hasClass('slide-not-active')) {
            $('.' + thisId).children('.slide-item-name').css('top', '-50%');
            $('.' + thisId).children('.special-note').css('top', '50%');
            $('.' + thisId).removeClass('slide-not-active')
        }
        else {
            $('.' + thisId).children('.slide-item-name').css('top', '50%');
            $('.' + thisId).children('.special-note').css('top', '150%');
            $('.' + thisId).addClass('slide-not-active')
        }
    })
    //on off burger nav
    $('.burger-nav').click(function () {
        if ($('nav').hasClass('nav-active')) {
            $('nav').removeClass('nav-active')
        }
        else {
            $('nav').addClass('nav-active')
        }
    }
    )
    //off burger nav when click on link
    $('nav>ul>li>a').click(function () {
        $('nav').removeClass('nav-active')
    })
})