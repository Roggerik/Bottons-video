const $video = document.querySelector('video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $forward = document.querySelector('#forward');
const $backward = document.querySelector('#backward');


    $play.addEventListener('click',handleplay)
    function handleplay(){
      $video.play()
      $pause.hidden = false;
      $play.hidden = true;
      $forward.hidden = false;
      $backward.hidden = false;
    }

    $pause.addEventListener('click',handlepause);
    function handlepause(){
      $video.pause()
      $pause.hidden = true;
      $play.hidden = false;
      $forward.hidden = true;
      $backward.hidden = true;
      
    };

    $forward.addEventListener('click', handleforward);
    function handleforward(){
      $video.currentTime = $video.currentTime - 10;
    }
      

    $backward.addEventListener('click', handlebackward);
    function handlebackward(){
      $video.currentTime = $video.currentTime + 10;
    }
    const $range = document.querySelector('#range');

    $video.addEventListener('loadeddata',handleLoaded);
    $video.addEventListener('timeupdate',handleTimeUpdate);

    function handleLoaded(){
      $range.max= $video.duration
    }
    
    function handleTimeUpdate(){
      $range.value = $video.currentTime
    }

    $range.addEventListener('input',handleInput);

    function handleInput(){
      $video.currentTime = $range.value;
    }
