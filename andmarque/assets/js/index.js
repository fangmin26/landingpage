$(function(){
  //우측 중앙 스크롤값표시
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    $("#scroll").text(Math.floor(scroll));
  });

    //skrollr js 기본셋
    let s = skrollr.init({
      edgeStrategy: 'set', //스크롤 위치가 키프레임 범위 밖에 있을때 애니메이션처리:set 기본값
      easing: 'linear' //기존 기능을 덮는 객체(여유감줌)
    });

    //#section1에서 fixed메뉴 글씨컬러 #fff
    $(window).scroll(function(){
      let scroll = $(window).scrollTop(),
          fixedM = $('.fixed'),
          lang = $('.lang'),
          mark = $('.mark'),
          ham = $('#ham');          
      if(scroll <300){
        fixedM.find('a','span').css('color','#fff');
        lang.find('span').css('color','#fff');
        mark.find('span').css('color','#fff');
        ham.find('span').css('background','#fff');
      }else{
        fixedM.find('a','span').css('color','#ff3901');
        lang.find('span').css('color','#ff3901');
        mark.find('span').css('color','#ff3901');
        ham.find('span').css('background','#ff3901');
      }
      if(scroll>1903 ){
        fixedM.find('a','span').css('color','#fff');
        lang.find('span').css('color','#fff');
        ham.find('span').css('background','#fff');   
      }      
    });
    //햄버거메뉴 클릭시 사이드메뉴
    $('#ham').click(function(){
      let hamMenu = $('#ham_menu');
      hamMenu.css('right','0');
    });
    $('.close').click(function(){
      let hamMenu = $('#ham_menu');
      hamMenu.css('right','-60%');      
    });

    // scroll시 background image 모션
    $(window).scroll(function(){
      let scroll = $(window).scrollTop(),      
          backImg1 = $('.back_img.first'),
          backImg2 = $('.back_img.second');
      if(scroll >300){
        backImg1.css('transform','translate3d(0px, 0px, 0px) scale(1.0797, 1.0797)');
      }else{
        backImg1.css('transform','none');
      }
      if(scroll >1300){
        backImg2.css('transform','translate3d(0px, 0px, 0px) scale(1.0797, 1.0797)');
      }else{
        backImg2.css('transform','none');
      }
    });

  });



