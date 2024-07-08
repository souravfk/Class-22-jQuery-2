$('document').ready(function(){

    $('.slick-parent').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: 0,
        prevArrow:`<span class="left"><i class="fa-solid fa-chevron-left"></i></span>`,
        nextArrow:`<span class="right"><i class="fa-solid fa-chevron-right"></i></span>`
       
      });

      new VenoBox({
        selector: '.my-video-links',
    });

     mixitup('.test');
});