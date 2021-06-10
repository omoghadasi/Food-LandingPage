$(document).ready(function () {
   $('.rslides').responsiveSlides({
       speed:500
   })
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,rtl:true,autoplay:true,loop:true
    });
});
$(document).ready(function(){
    $(".inline").colorbox({
        inline:true,width:450,
    });
    $(".privacy").mCustomScrollbar({
        scrollButtons:{
            enable:true
        },
        theme:"dark"
    });
    $(document).ready(function(){
        $(".sticky-menu").sticky({topSpacing:0});
    });
});