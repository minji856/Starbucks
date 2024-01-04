const searchEl = document.querySelector(".search")
const searchinputEl = document.querySelector("input")

searchEl.addEventListener("click", ()=>{
    searchinputEl.focus()
})

searchinputEl.addEventListener("focus", ()=>{
    searchEl.classList.add('focused')  //div class="search focused"
    searchinputEl.setAttribute("placeholder", "통합검색")
})  //HTML에도 있는 속성-placeholder

searchinputEl.addEventListener("blur", ()=>{
    searchEl.classList.remove('focused')  
    searchinputEl.setAttribute("placeholder", "")
}) 

const badgeEl = document.querySelector('header .badges') //전제창-뷰포트에서 이벤트가 일어나니까 window.add
const toTopEl = document.querySelector('#to-top')
/* lodash cdn
window.addEventListener("scroll", _.throttle(()=>{
    //console.log(window.scrollY)
    if(window.scrollY > 500) {
        badgeEl.style.display = 'none'
    }
    else {
        badgeEl.style.display = 'block'
    }
}, 300))    오토바이 조종하듯이 속도조절 호출되는 횟수가 줄었다
*/

/* gsap cdn 검색 */
window.addEventListener("scroll", _.throttle(()=>{
    //console.log(window.scrollY)
    // 페이지 스크롤 위치가 500px이 넘으면
    if(window.scrollY > 500) {
        //gasp.to(요소, 지속시간-transition, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display:'none'
        })
        // 상단으로 스크롤 버튼 보이기!
        gsap.to(toTopEl, .2, {
            x: 0
        })
    }
    // 페이지 스크롤 위치가 500px이 넘지 않으면.
    else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display:'block'
        })
        // 상단으로 스크롤 버튼 숨기기!
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300)) 

// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, .7, {
      scrollTo: 0
    })
})

/* Visual Image를 순차적으로 나타나게 하는 기능 */
const fadeEls = document.querySelectorAll(".visual .fade-in")
/* el을 4번 돌리겠다 */
fadeEls.forEach((el, cnt) => {
    gsap.to(el, 1, {opacity: 1, delay:(cnt + 1) * .7})

})          /* 0.7초씩 요소별로 지연된다 동일하면 순차적 X*/

/* 슬라이드 요소 관리 */
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    loop: true,
    autoplay: true
})

new Swiper('.promotion .swiper-container', {
    direction: 'horizontal', /* 기본값 생략가능 */
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
})

new Swiper('.awards .swiper-container', {
    // direction: 'horizontal', // 수평 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true, // 반복 재생 여부
    spaceBetween: 30, // 슬라이드 사이 여백
    slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
    // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
    navigation: { // 슬라이드 이전/다음 버튼 사용 여부
      prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
      nextEl: '.awards .swiper-next' // 다음 버튼 선택자
    }
})


/* Promotion 토글 */
const promotionEl = document.querySelector(".promotion")
const promotionToggleBtn = document.querySelector(".toggle-promotion")
let isHidePromotion = false; // 기본값 false
// 플래그 기법
promotionToggleBtn.addEventListener("click", () => {
    if (isHidePromotion) {
        promotionEl.classList.remove("hide")
        isHidePromotion = false;
    }
    else {
        promotionEl.classList.add("hide")
        isHidePromotion = true; // false로 주었기때문에 else문 부터 실행
    }
}) 

//첫번째 이미지에 대한 접근자 - selector
/* 떠다니는(부유하는) 요소를 만드는 함수 */
function rand(min, max){
    return parseFloat((Math.random() * (max-min)+min).toFixed(2))
}
// parseFloat((Math.random() * (delay-0)+0).toFixed(2)) 너무 기니까 함수로 변경
function floatingObject(selector, delay, size){ 
    gsap.to(selector, rand(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,         //최댓값    //최솟값
        delay: rand(0, delay),
        ease: "power1.inOut"
    })
}

floatingObject('.floating1', 1, 15) //각각의 이미지
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


/* 요소가 화면에 보여짐 여부에 따른 요소 관리 */
/* 여러개가 아니니까 반복해서 실행하게끔 forEach 사용 */
const spyEl = document.querySelectorAll('section.scroll-spy')
    spyEl.forEach(function(spyEl) {
        new ScrollMagic.Scene ({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
        .addTo(new ScrollMagic.Controller())
})

/* 올해가 몇 년도인지 계산 */
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()