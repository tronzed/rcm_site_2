AOS.init();

$('#banner_id').owlCarousel({
    loop:true,
    margin:10,
    nav:1,
    dots:0,
    autoplay:1,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('#shop_category_carousel_id').owlCarousel({
    loop:true,
    margin:50,
    nav:1,
    dots:0,
    autoplay:1,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});


$('#trending_products_carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:1,
    dots:0,
    autoplay:1,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});


$('#shop_brands_carousel').owlCarousel({
    loop:true,
    margin:50,
    nav:1,
    dots:0,
    autoplay:1,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});