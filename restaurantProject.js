$(document).ready(function () {
    let move = 0;
    const y = -30;
    let detail_isActive = false;
    $(".next").click(function () {

        move += 1;
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

    $(".previous").click(function () {
        move -= 1;
        $('.slide').css('transition', 'all 0.5s')
        $('.slide').css('transform', `translateX(${-move * 30 + y}vw)`)

    });
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
    $('.reservation').click(function () {
        $('.reservation-content').addClass('form-active')
        $('.')
    })
})