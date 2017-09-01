(function(){
'use strict';
var showHex = false;
var msDay = 86400000;
var msHour = 3600000;
var msMinute = 60000;
var msSecond = 1000;
var clock = document.querySelector('.clock');
var progress = document.querySelector('.progress');
var background = document.getElementById('rainbow');

  function time(){

  var startTime = Date.now();
  if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
  var paddedHour;
  var paddedMinute;
  var paddedSecond;
  var hexHour;
  var hexMinute;
  var hexSecond;
  var hexTotal;
  var timeDay = Math.floor(startTime/msDay);
  var timeHour = Math.floor((startTime%msDay)/msHour);
  var timeMinute = Math.floor(((startTime%msDay)%msHour)/msMinute);
  var timeSecond = Math.floor((((startTime%msDay)%msHour)%msMinute)/msSecond);

  timeHour = (timeHour-4);
  if (timeHour < 0){
    timeHour = (24+timeHour);
    }

    hexSecond = timeSecond*1000;
    hexSecond = hexSecond.toString(16);

    paddedHour = ("0" + timeHour).slice(-2);
    paddedMinute = ("0" + timeMinute).slice(-2);
    paddedSecond = ("0" + timeSecond).slice(-2);


    function overHandler(ev){
      showHex = true;

     }
   function leaveHandler(ev){
     showHex = false;
   }
    clock.onpointerover = overHandler;
    clock.onpointerleave = leaveHandler;
    if (showHex === false){
      clock.textContent = paddedHour + ':' + paddedMinute + ':' + paddedSecond;
    } else {
   clock.textContent = ("0" + hexSecond.slice(0, 1)).slice(-2) + ':' + ("0" + hexSecond.slice(1, 3)).slice(-2) + ':' + ("0" + hexSecond.slice(3, 4)).slice(-2);
  }
 background.style.backgroundColor = '#' + hexSecond + '0' + '0';
  progress.style.width = timeSecond +'vw';

  console.log(hexSecond);
  console.log(Math.fround(timeSecond/60));
  console.log(startTime);
  console.log(timeDay);
  console.log(timeHour);
  console.log(timeMinute);
  console.log(timeSecond);

  window.setInterval(time, 1000);

}
time();







}());
