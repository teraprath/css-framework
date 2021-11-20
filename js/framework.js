// Show mobile menu
$(".mobile-open").click(function() {
    $(".mobile-open").hide(0);
    $(".mobile-menu").show(200);
});

// Hide mobile menu
$(".mobile-close").click(function() {
    $(".mobile-menu").hide(200);
    $(".mobile-open").show(200);
});