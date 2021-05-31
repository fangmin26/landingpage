   $(function () {

     //scroll 값
     //우측 하단 스크롤값표시
     $(window).scroll(function () {
       let scroll = $(window).scrollTop();
       $(".scroll").text(Math.floor(scroll));
     })

     //section2
    //  $(window).scroll(function () {
    //    let section2Tit = $(".sec2_tit");
    //    let sectionCont = $(".sec1_cont");
    //    let scroll = $(window).scrollTop();

    //   if(scroll>300){
    //     section2Tit.stop().animate({paddingTop:150},600);
    //   }

    //  });

     //skrollr js 기본셋
     // let s = skrollr.init({
     //   edgeStrategy: 'set', //스크롤 위치가 키프레임 범위 밖에 있을때 애니메이션처리:set 기본값
     //   easing: 'linear' //기존 기능을 덮는 객체(여유감줌)
     // });

     //section1 swiper
     var mySwiper = new Swiper(".swiper-container", {
       direction: "horizontal",
       loop: true,
       pagination: ".swiper-pagination",
       grabCursor: true,
       speed: 2000,
       paginationClickable: true,
       parallax: true,
       effect: "slide",
       mousewheelControl: 1,
       autoplay: {
         delay: 2500,
         reverseDirection: true,
       },
       autoplay: {
         delay: 7000,
         reverseDirection: true,
       }
     });
     var mySwiper3 = new Swiper(".swiper-container3", {
       direction: "vertical",
       loop: true,
       pagination: ".swiper-pagination",
       grabCursor: true,
       speed: 2000,
       paginationClickable: true,
       parallax: true,
       effect: "slide",
       mousewheelControl: 1,
       autoplay: {
         delay: 2500,
         reverseDirection: true,
       },
       autoplay: {
         delay: 7000,
         reverseDirection: true,
       }
     });
   }); //$(function(){})