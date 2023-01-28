$('.nav-menu').click(function () {
    console.log('menu');
    $(this).addClass('active');
    $(".sidebar").removeClass("hidden");
});

$('.close-sidebar').click(function () {
    console.log('close');
    $(".nav-menu").removeClass('active');
    $(".sidebar").addClass("hidden");
});
