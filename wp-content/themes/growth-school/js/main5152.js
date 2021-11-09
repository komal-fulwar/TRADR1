$(".header-change").closest("body").addClass("header-change");  
$("body.header-change").children("header").addClass("header-option2");
$("a[href$='#']").attr("href", "javascript:void(0);");

setInterval(function(){ 
	var btnValue = $("section.who-workshops .pay-btn").attr("data-content");
	var btnValue2 = $("section.what-will-section.programes-what-will-section .pay-btn").attr("data-content");
	var btnValue3 = $(".programes-banner-content .pay-btn").attr("data-content");
	var btnValue4 = $("section.register-section .pay-btn").attr("data-content");
	var btnValue5 = $(".faq-section .pay-btn").attr("data-content");
	var btnValue6 = $("section.home-workshop-section.home-case-studies.workshop-section .pay-btn").attr("data-content");
	
 	var btnValue7 = $(".offer-while-left .pay-btn").attr("data-content");
	
	
    $("section.who-workshops .pay-btn a").text(btnValue); 
	$("section.what-will-section.programes-what-will-section .pay-btn a").text(btnValue2);
	$(".programes-banner-content .pay-btn a ").text(btnValue3);
	$("section.register-section .pay-btn a ").text(btnValue4);
	$(".faq-section .pay-btn a ").text(btnValue5);
	$("section.home-workshop-section.home-case-studies.workshop-section .pay-btn a ").text(btnValue6);
	$(".offer-while-left .pay-btn a ").text(btnValue7);
}, 100);




$(document).ready(function () {
    $(".menu-btn").on('click', function () {
        $("header").toggleClass('active');
        $(this).toggleClass("active");
    });
    $(".navigation>ul>li>a").on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass("active")
    });
// 	$("a[href]").click(function () {
//         var store = $(this).attr("href");
//         $('body,html').animate({scrollTop: $(store).offset().top - 20}, 1500);
//         return false;
//     })
	
// 	$("section.home-workshop-section .load-more .main-btn").on('click', function () {
//         $(this).parent().addClass('active');
//         $(".home-workshop-grid").addClass("active")
//     });
});

$(function(){
	if ($(window).width() > 767){
        $("section.home-workshop-section.home-workshop-section-mobile .home-workshop-grid .home-workshop-card").slice(0, 6).show();
        $(".load-more button").click(function(e){
            e.preventDefault();
            $("section.home-workshop-section.home-workshop-section-mobile .home-workshop-grid .home-workshop-card:hidden").slice(0, 6).show();
            if($("section.home-workshop-section.home-workshop-section-mobile .home-workshop-grid .home-workshop-card:hidden").length == 0){ 
                $(".load-more button").hide();
            }
        });
	}else  {
		$("section.home-workshop-section.home-workshop-section-mobile .home-workshop-grid .home-workshop-card").slice(0, 2).show();
        $(".load-more button").click(function(e){
            e.preventDefault();
            $("section.home-workshop-section.home-workshop-section-mobile .home-workshop-grid .home-workshop-card:hidden").slice(0, 2).show();
            if($("section.home-workshop-section.home-workshop-section-mobile .home-workshop-grid .home-workshop-card:hidden").length == 0){ 
                $(".load-more button").hide();
            }
        });
	}
});

setTimeout(function(){   
  $('.register-timer').load('page-programs.php');    
}, 1000);

$(window).scroll(function(){
   if ($(this).scrollTop() > 200){
       $('header').addClass("header-fixed");
     }
  else{
       $('header').removeClass("header-fixed");
     }
});

$(document).ready(function () {
    $('.accordion').find('.accordion-toggle').click(function () {
        $(this).next().slideToggle('600');
        $(this).parent().siblings().children(".accordion-content").not($(this).next()).slideUp('600');
        $(this).parent().parent().siblings().children(".accordion-group").children(".accordion-content").not($(this).next()).slideUp('600');
    });
    $('.accordion-toggle').on('click', function () {
        $(this).toggleClass('active').parent().siblings().children(".accordion-toggle").removeClass('active');
        $(this).parent().parent().siblings().children(".accordion-group").children(".accordion-toggle").removeClass('active');
    });
    $('.accordion .accordion-group').eq(0).children(".accordion-content").css("display", "block");
    $('.accordion .accordion-group').eq(0).children(".accordion-toggle").addClass("active");

    $("ul.tabs li").click(function() {
        var t = $(this).attr("data-tab");
        $("ul.tabs li").removeClass("current"), $(".tab-content").removeClass("current"), $(this).addClass("current"), $("#" + t).addClass("current")
    })
    $(".tab-content").click(function() {
        $(this).siblings().removeClass("active")
        $(this).toggleClass("active");
    })
    $('ul.tabs li').eq(0).addClass("current");
    $('.tab-content').eq(0).addClass("active");
    $('#what-will-1').addClass("current");
	
	$(".student-right button.main-btn").click(function() {
      $(this).parent().addClass("active");
    })
      
})

 $(document).ready(function() {
     $(".cat-tab-list li").click(function () {
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        var current_cat = $(this).attr("cat-tab");
        var study_cat = $(this).attr("cat-tab");
         if ($('.home-workshop-card').hasClass(current_cat)){ 
             $(".home-workshop-card").css("display", "none");
             $("."+current_cat).css("display", "flex");
         } 
    });
	 
	 $(".case-study-tab-list li").click(function () {
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        var current_cat1 = $(this).attr("cat-tab-case");
        var study_cat1 = $(this).attr("cat-tab-case");
         if ($('.main-case-study').hasClass(current_cat1)){ 
             $(".main-case-study").css("display", "none");
             $("."+current_cat1).css("display", "flex");
         } 
         if ($('.stellar-carousel .item').hasClass(study_cat1)){ 
             $(".stellar-carousel .item").parent().css("display", "none");
             $("."+study_cat1).parent().css("display", "flex");
         } 
    });
	
	 $(".blog-mid-section ul li").click(function () {
        $(this).siblings().removeClass("active")
        $(this).addClass("active")
        $(".blog-mid-left").removeClass("active");
        var current_cat = $(this).attr("cat-tab");
        var study_cat = $(this).attr("cat-tab");
         if ($('.blog-mid-section .latest-blog-card').hasClass(current_cat)){ 
             $(".blog-mid-section .latest-blog-card").css("display", "none");
             $("."+current_cat).css("display", "inline-block");
         } 
         if ($('.stellar-carousel .item').hasClass(study_cat)){ 
             $(".stellar-carousel .item").parent().css("display", "none");
             $("."+study_cat).parent().css("display", "inline-block");
         } 
    });
      $('.cat-tab-list li[cat-tab="all"],  .case-study-tab-list li[cat-tab-case="all"], section.blog-mid-section ul li[cat-tab="all"]').click(function () {
          $(".blog-mid-left").addClass("active");
          $(".home-workshop-card, .stellar-carousel .owl-item, .main-case-study, .latest-blog-card").css("display", "flex");
    });
     
});

$(document).ready(function () {
    $('.play-icon').click(function () {
        var url = $(this).attr("video-url");
        $(".modal-content iframe").attr("src", url);
        $("#myModal").css("display", "flex");
    });
    $(".close").click(function() {
        $("#myModal").css("display", "none");
        $(".modal-content iframe").attr("src", "");
    })
});

// $(document).ready(function () {
//     var myImg = document.querySelector("#certified-img");
//     var currWidth = myImg.clientWidth;
//     var currHeight = myImg.clientHeight;
//     if(currWidth > currHeight) {
//       $("#certified-img").addClass("landscape");
//     }else {
//       $("#certified-img").addClass("potrait");
//     }
// })

// function startTime() {
//   const today = new Date();
//   let h = 23 - today.getHours();
//   let m = 59 - today.getMinutes();
//   let s = 59 - today.getSeconds();
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('hours').innerHTML =  h;
//   document.getElementById('minutes').innerHTML =  m;
//   document.getElementById('seconds').innerHTML =  s;
//   setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//   return i;
// }
// startTime();

/* mouse move and object move start */
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 15;
function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';
  $('.banner-connection>div a').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });
  window.requestAnimationFrame(moveBackground);
}
$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(10, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(10, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (30 * lMouseX) / 120; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (0 * lMouseY) / 120;

});
moveBackground();
/* mouse move and object move End */

$(window).scroll(function() {
    var t = $(this).scrollTop(),
        n = $(".banner-section, section.about-section, section.home-workshop-section, section.workshop-section").offset().top;
    if (t > .8 * n) {
        var o = t - n + $(".banner-section, section.about-section, section.home-workshop-section, section.workshop-section").height();
        $(".move-element, .obviously-patten, .about-patten1, .about-patten2, .about-patten3, .community-patten1, .community-patten2, .community-patten3, .case-studies-patten1, .case-studies-patten2, .case-studies-patten3, section.workshop-section .workshop-patten1, section.workshop-section .workshop-patten2, section.workshop-section .workshop-patten3, section.workshop-section .workshop-patten4, .programes-patten1").css("transform", "translateY(-" + o / 10 + "%)");
        var a = t - n + $("section.home-mid-section").height();
        $(".obviously-patten").css("transform", "translateY(-" + a / 20 + "%)");
        var b = t - n + $("section.home-workshop-section").height();
        $(".workshop-patten1, .workshop-patten2, .workshop-patten3, .workshop-patten4").css("transform", "translateY(-" + b / 5 + "%)")
        // var c = t - n + $("section.home-mid-section2").height();
        // $(".growth-patten1, .growth-patten2, .growth-patten3").css("transform", "translateY(-" + c / 5 + "%)")
    }
})