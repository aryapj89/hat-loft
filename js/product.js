$(document).ready(function(){

    $(".nav-link").click(function()
{
    $(".nav-link").removeClass("active1");
    $(this).addClass("active1")
});
});

$(".filter").click(function()
{
    $(".accordion").slideToggle();
});

$(document).ready(function(){

    $(".product-link").click(function()
{
    $(".product-link").removeClass("active2");
    $(".product-link").removeClass("active1");
    $(this).addClass("active2")
});
});

$(".product-det").click(function()
{
    $(".product").show();
    $(".Measurement").hide();

})

$(".measure").click(function()
{
    $(".product").hide();
    $(".Measurement").show();

})