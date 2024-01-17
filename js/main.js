//요소값을 담을때 변동되면 안되니까 const
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
console.log(searchInputEl);

searchEl.addEventListener('click',function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus',function(){
   searchEl.classList.add('focused');
   searchInputEl.setAttribute('placeholder','통합검색'); 

});

searchInputEl.addEventListener('blur',function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});

//뱃지 숨기기
const badgeEl = document.querySelector('.badges');

const topEl = document.querySelector('#to_top');


window.addEventListener('scroll',_.throttle(function(){
    //console.log('scroll');
    //console.log(window.scrollY);
    //console.log(window.screenY);
    if(window.scrollY > 500){
        // scroll의 y축 값이 500 이상이면 뱃지를 숨기고, 아니라면 보이게 하기.
        // badgeEl.style.display = 'none';
        // gsap.to(요소, 지속시간,옵션); 이렇게 써줘야한다.
        gsap.to(badgeEl,0.5,{ //gsap는 요소를 쓸때 하나의 요소만 설정할 수 있다.
            opacity:0,
            display:'none'
        });
        //top 보이기
        gsap.to(topEl,0.2,{
            x:0 //css에서는 translateX(0)이런식으로 했지만, js에서는 그냥 x:0이라 칭한다.
        })
    }else{
        // badgeEl.style.display = 'block';
        gsap.to(badgeEl,0.5,{
            opacity:1,
            display:'block'
        });
        //top 숨기기
        gsap.to(topEl,0.2,{
            x:100
        })
    }
},300)); //300은 밀리세컨드로 계산해서 0.3초라는 의미.

topEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0 //스크롤 투는 윈도우의 스크롤을 맨 위로 올리는 js의 정식명칭이다. 어떻게 사람이름이 스크롤 투wwwww가소로운
    
    });
});

const fadeEls = document.querySelectorAll('.section1 .fade-in');
fadeEls.forEach(function(fadeEl,index){
    gsap.to(fadeEl,1,{
        delay:(index+1)*.7, // 이렇게 하면 첫 요소는 그대로, 둘째 요소는 1.4초, 세번째는 2.1초..이런식
        opacity:1
    });
});
// 스와이프 기능
new Swiper('.inner_left .swiper',{
    direction : 'vertical',
    autoplay : true,
    loop : true,
    speed : 100
});
new Swiper('.promotion .swiper',{
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween : 10, // 슬라이드 사이 여백
    centeredSlides : true, //1번 슬라이드가 가운데 보이기
    autoplay: true,
    loop : true,
    pagination : {
        el:'.promotion .swiper-pagination',//페이지 번호 선택자
        clickable : true // 내가 클릭했을때 해당 페이지로 이동할래요 선택자.
    },
    navigation:{
        prevEl : '.promotion .swiper-button-prev',
        nextEl : '.promotion .swiper-button-next'
    }
});
new Swiper('.section9 .swiper',{
    slidesPerView: 5,
    spaceBetween : 30,
    autoplay:true,
    loop:true,
    speed : 100,
    pagination : {
        el:'.section9 .swiper-pagination',//페이지 번호 선택자
        clickable : true // 내가 클릭했을때 해당 페이지로 이동할래요 선택자.
    },
    navigation:{
        prevEl : '.section9 .swiper-button-prev',
        nextEl : '.section9 .swiper-button-next'
    }
});

const promotionToggleEl = document.querySelector('.toggle-promotion');
const promotionEl = document.querySelector('.promotion');
//저장하는 변수는 바뀌면 안되니까 const, 페이지의 열고닫는 여부는 변경해야 되니까 let.
let isHidePromotion = false; //이녀석은 페이지가 지금 닫혀있는 상태다. 사이트 처음 들어가면 접혀있잖어?
promotionToggleEl.addEventListener('click',function(){
    isHidePromotion = !isHidePromotion; //이러면 그..프로모션을 누를때마다, 값이 바뀌게 된다. 출력문 보면 true false 무한반복 개지림.
    //console.log(isHidePromotion);
    if(isHidePromotion){ //여기서는 조건이 이미 true로 들어가기 때문에, 막 하이드프로모션 이스 트루..이런식으로 안해도 된다.
        promotionEl.classList.add('open');
        promotionToggleEl.classList.add('open');
    }else{
        promotionEl.classList.remove('open');
        promotionToggleEl.classList.remove('open');
    }
});
//335 스크롤y값
const spyEls = document.querySelectorAll('div.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({
        triggerElements:spyEl, //씬의 트리거로써 spyEl이라는 요소를 만났을때. 내가 감지해야할 요소 지정.
        triggerHook:.8 //0.8초마다 그 요소가 있는지 없는지 확인하는것.
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller())
}); 
//scene = 어느섹션에서 어떤 요소를 만나, 어떤 클래스를 사용할 것인가
//setClassToggle = 어떤 클래스에 '어떤 클래스'를 추가할 것인가
//addTo = 애니메이션을 실행하기 위한 옵션을 추가하는것. scrollMagic.controller가 그 옵션이다.
