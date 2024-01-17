// 유튜브 영상을 집어넣어보자.
// <!-- 1. The <iframe> (and video player) will replace this <div> tag. -->


  // 2. This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 이 부분은 유튜브를 부르는 부분.(위에)

  // 3. This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    videoId: 'EJF919p_hb0', //재생할 유튜브 영상의 id이다. 영상url의 v=로 시작하는 부분이야. 이거 해킹당하면 큰일나겠네
    playerVars:{
        autoplay:true,
        loop:true, /*이거 지금 영상 구조땜에 루프가 안된댄다*/
    },
    events:{
        onReady:function(event){
            event.target.mute()
        }
    }
    });
  }
