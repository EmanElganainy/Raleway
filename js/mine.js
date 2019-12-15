

 // when scroll body ---- sticky nav bar
$(window).scroll(function(){
  let sc =$(this).scrollTop();
  if(sc > 50)
  {
    $("nav").addClass("sticky"); 
  }
  else{
    $('nav').removeClass('sticky'); 
 }
})


// loading screen
$(document).ready(function(){
    
  $('#loading').fadeOut(2000);

})
// // Team Carousel
$('.teams').owlCarousel({
  loop:false,
  nav:false,
  dots:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});

//

$('.process-carousel').owlCarousel({
  loop:true,
  nav:true,
  dots:false,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
  responsiveClass:true,
  navText: 
  ["<span class='carousel-nav-right'><i class='fas fa-long-arrow-alt-left'></i></span>",
   
  "<span class='carousel-nav-left'><i class='fas fa-long-arrow-alt-right'></i></span>"],
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:1,
      },
      1000:{
          items:1,
      }
  }
});



// brand Carousel
$('.brand-img').owlCarousel({
  loop:true,
  margin:0,
  autoplayTimeout:3000,
  autoplay:true,
  autoplaydots:false,
  HoverPause:true,
  dots:false,
  responsiveClass:true,
  responsive:{
      0:{
          items:2,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
})
 
// Counter 
$('.timer').countTo();
// scroll top element
    
var scrollButton = $("#scroll-top");
    
$(window).scroll(function (){
if($(this).scrollTop()> 300)
{
 scrollButton.show();
}
else
{
   scrollButton.hide(); 
}

});

// Click On Button Top     
        
scrollButton.on('click',function (){
  $('html,body').animate({scrollTop: 0},300);    
});
