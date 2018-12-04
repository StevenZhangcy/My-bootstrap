$('a + ul').prev().on ('click', function () {
    $(this).next().slideToggle();
});