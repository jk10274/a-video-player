var player = videojs('a-video-player', {
    controls: true,
    autoplay: false,
    preload: 'auto'
  });
  // When you pass text in options it just creates a control text,
  // which is displayed as tooltip when hovered on 
  // this button viz the span in you div,
  var myButton = player.controlBar.addChild("button");
  
  // There are many functions available for button component 
  // like below mentioned in this docs 
  // https://docs.videojs.com/button. 
  // You can set attributes and clasess as well.
  
  // Getting html DOM
  var myButtonDom = myButton.el();
  // Since now you have the html dom element 
  // you can add click events
  
  
  // Now I am setting the text as you needed.
  /* myButtonDom.innerHTML = "Hello";
  
  myButtonDom.onclick = function(){
    alert("Redirecting");
    window.location.href = "https://www.google.com"
  }   */

  /* var vjsControl = document.getElementsByClassName("vjs-progress-control vjs-control");
  var circle = document.getElementsByClassName("vjs-icon-circle:before vjs-seek-to-live-control vjs-icon-placeholder:before video-js vjs-volume-level:before video-js vjs-play-progress:before");
  
  vjsControl[0].addEventListener("mouseover", function( event ) {
    console.log("over");
    for (var i = 0; i < circle.length; i++) {
        circle[i].style.visibility = "visible";
    }
   
    
  }, false); */