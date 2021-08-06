$(document).ready(function() {
      var owl = $("#owl-demo");
      owl.owlCarousel({
		autoPlay : false,
		slideSpeed : 1000,
		stopOnHover: true,
        navigation : true,
        singleItem : true,
		 afterAction: function(el){
       //remove class active
       this
       .$owlItems
       .removeClass('active')
      
       //add class active
       this
       .$owlItems //owl internal $ object containing items
       .eq(this.currentItem + 0)
       .addClass('active')
      
     }
  });
});
$(function() {
  $('a.slide-nav[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top 
        }, 1000);
        return false;
      }
    }
  });
});

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.headerst').addClass("sticky");	
  }
  else{
    $('.headerst').removeClass("sticky");
  } 
});

function mobileremoveclass(){
if($(window).width() < 900 ){
$('.headerst').removeClass('headerst');		
}	
}

function mobiletopsearch(){
if($(window).width() < 767 ){	
$('.blog-search').removeClass('blog-search');	
$('.search-wrap button[type="submit"]').addClass('blog-search-new');	


var inpnewmobile = false;
$(".blog-search-new").on("click", function(){
	 if(inpnewmobile == false){
	 $(".mobile-searchw").slideDown();
	   inpnewmobile = true;
	 } else{
		 $(".mobile-searchw").slideUp();
		inpnewmobile = false; 
	 }
 });	
}	
}

$(window).width(function(){
	mobileremoveclass(); 
	mobiletopsearch();
 });
 $(window).resize(function(){
	mobileremoveclass();
	mobiletopsearch(); 
 });
 
 
 $(document).ready(function() {
	 var searchswitch = false;
	 $(".blog-search").click(function(){
		 if(searchswitch == false){
		 $(this).parent().animate({"width":"100%"}).addClass("show-inp");
		 searchswitch = true;
		 } else{
			$(this).parent().animate({"width":"45px"}).removeClass("show-inp"); 
			searchswitch = false; 
		 }
	 });
	 
	 
	 $(".quesandans-list li").click(function(){
		$(this).next(".answer-wrap").slideToggle();		 
		$(this).toggleClass("active"); 
		$(this).siblings().removeClass("active");
		$(this).siblings().next(".answer-wrap").slideUp();
	 }); 
	 	 
 });