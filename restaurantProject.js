$(document).ready(function () {
    let x = 0;
    const y = -30;
    $(".next").click(function () {

        x += 1;
        $('.slide').css('transition', 'all 0.5s')
        $('.slide').css('transform', `translateX(${-x * 30 + y}vw)`)

    });
    $('.slide').on('transitionend', function () {
        if (x == 3) {
            x = 0
            $('.slide').css('transition', 'none');
            $('.slide').css('transform', `translateX(${-x * 30 + y}vw)`)
        }
        else if (x == -1) {
            x = 2;
            $('.slide').css('transition', 'none');
            $('.slide').css('transform', `translateX(${-x * 30 + y}vw)`);

        }
    })

    $(".previous").click(function () {
        x -= 1;
        $('.slide').css('transition', 'all 0.5s')
        $('.slide').css('transform', `translateX(${-x * 30 + y}vw)`)

    });


})