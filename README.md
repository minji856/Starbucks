![image](https://github.com/minji856/Starbucks/assets/144756912/8a92bc44-005c-4831-9fed-f98cf5caf55d)

### 애니메이션 기능
![image](https://github.com/minji856/Starbucks/assets/144756912/8631ad43-2ed7-4dad-b36c-8266e6597cc5)

- YouTube 동영상 삽입
```javascript
let tag = document.createElement('script');     //스크립트 태그를 추가하겠다

tag.src = "https://www.youtube.com/iframe_api";
// <script src="https://www.youtube.com/iframe_api"></script>

let firstScriptTag = document.getElementsByTagName('script')[0]; //youtube가 만든 코드중에 첫번째
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    // <div id="player"></div> 에 접근하겠다 #player해야하긴하지만 이미 함수에서 처리되있음
    // player = 한번만 쓰고 말거니까 선언 안해줘도된다//
    // https://youtube.com/watch?v=An6LvWQuj_8 제어를 할수 없다 id만 있으면 제어 가능
    new YT.Player('player', {
        videoId: 'An6LvWQuj_8',
        // https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters
        playerVars:{
            autoplay: true,
            loop: true,
            playlist: 'An6LvWQuj_8'
        },
        events: {           //화살표함수써도 됨. 한번만 쓰고 말거니까
            'onReady': function(ev){
                ev.target.mute()     //player에 대한 정보에 mute()함수 호출
            },
        }
    });
}

// 함수를 만드는 방법 function onPlayerReady(){} 이긴한데 익명함수로 써주기

```

![image](https://github.com/minji856/Starbucks/assets/144756912/e696c4ea-ae95-4007-92df-c24e095c13ed)


- Swiper 사용
