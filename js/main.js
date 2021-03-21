function scrv(scrollContent) {
  if (scrollContent == "gioithieuplay") {
    document.getElementById("gioithieu").scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
    audio();
  }
  document.getElementById(scrollContent).scrollIntoView({
    block: "start",
    behavior: "smooth",
  });
}

p = 0;
function loopstart() {
  for (i = 0; i < audioControl.length; i++) {
    if (!audioControl[i].paused) {
      if (p < 1) {
        context = new AudioContext();
        depzai = context.createAnalyser();
        source = context.createMediaElementSource(audioControl[i]);
        source.connect(depzai);
        depzai.connect(context.destination);
        p = 1;
      }
      loop("audioControl[" + i + "]");

      // return;
    }
  }
}

// var audioControl = document.getElementsByClassName("audioControl");
// var audioo = document.getElementsByClassName("boxMusic");
function nextpre(play) {
  for (i = 1; i <= audioControl.length; i++) {
    if (play == "next") {
      if (audioControl[i - 1].duration > 0 && !audioControl[i - 1].paused) {
        if (i == audioControl.length) {
          audioControl[i - 1].pause();
          audioControl[0].play();
          // console.log('next to 0');
          // console.log(audioControl[i]);
          audioo[i - 1].style.bottom = "-8%";
          audioo[i - 1].style.opacity = "0";
          audioo[0].style.bottom = "9%";
          audioo[0].style.opacity = "1";
          loopstart();
        } else {
          audioControl[i - 1].pause();
          audioControl[i].play();
          // console.log('next to +1');
          // console.log(audioControl[i]);
          audioo[i - 1].style.bottom = "-8%";
          audioo[i - 1].style.opacity = "0";
          audioo[i].style.bottom = "9%";
          audioo[i].style.opacity = "1";
          loopstart();
        }
        break;
      }
    } else {
      if (audioControl[i - 1].duration > 0 && !audioControl[i - 1].paused) {
        if (i == 1) {
          audioControl[0].pause();
          audioControl[audioControl.length - 1].play();
          // console.log('pre to final');
          // console.log(audioControl[i]);
          audioo[0].style.bottom = "-8%";
          audioo[0].style.opacity = "0";
          audioo[audioControl.length - 1].style.bottom = "9%";
          audioo[audioControl.length - 1].style.opacity = "1";
          loopstart();
        } else {
          audioControl[i - 1].pause();
          audioControl[i - 2].play();
          // console.log('pre to -1');
          // console.log(audioControl[i]);
          audioo[i - 1].style.bottom = "-8%";
          audioo[i - 1].style.opacity = "0";
          audioo[i - 2].style.bottom = "9%";
          audioo[i - 2].style.opacity = "1";
          loopstart();
        }
        break;
      }
    }
  }
}

// AOS.init();
// var x = 0;
function audio() {
  if (x != 0) {
    // document.getElementById('audio').pause();
    for (i = 0; i < audioControl.length; i++) {
      audioControl[i].pause();
      audioo[i].style.bottom = "-8%";
      audioo[i].style.opacity = "0";
    }
    // document.getElementById('myVideo').style.zIndex = "-10";
    // document.getElementById('myVideo').pause();
    document.getElementById("play").style.display = "unset";
    document.getElementById("img").style.backgroundColor =
      "rgba(0, 0, 0, 0.377)";
    document.getElementById("img").style.boxShadow = "unset";
    document.getElementById("img").style.zIndex = "unset";
    document.getElementById("img").style.height = "360px";
    document.getElementById("img").style.width = "360px";
    document.getElementById("imgin").style.height = "360px";
    document.getElementById("img").style.marginRight = "30px";
    document.getElementById("zIn").style.display = "unset";
    document.getElementById("boxMusic").style.bottom = "-8%";
    document.getElementById("boxMusic").style.opacity = "0";
    document.getElementById("img").classList.remove("rotate");
    document.getElementById("bgGif").style.background = "";
    // document.getElementById('bgGif').style.backgroundSize = "unset";
    document.getElementById("bgGif").style.backgroundAttachment = "unset";
    // document.getElementById("bgGif").style.backgroundColor = "none";
    x = 0;
  } else {
    document.getElementById("audio").play();
    // document.getElementById('myVideo').style.zIndex = "10000";
    // document.getElementById('myVideo').play();
    document.getElementById("play").style.display = "none";
    document.getElementById("img").style.backgroundColor =
      "rgba(255, 255, 255, 0.493)";
    document.getElementById("img").style.boxShadow =
      "0px 0px 5px white, 0px 0px 20px white, 0px 0px 50px white,0px 0px 100px white, 0px 0px 150px white";
    document.getElementById("img").style.zIndex = "11000";
    document.getElementById("img").style.height = "400px";
    document.getElementById("img").style.width = "400px";
    document.getElementById("imgin").style.height = "400px";
    document.getElementById("img").style.marginRight = "0px";
    document.getElementById("zIn").style.display = "none";
    document.getElementById("boxMusic").style.bottom = "9%";
    document.getElementById("boxMusic").style.opacity = "1";
    document.getElementById("img").classList.add("rotate");
    document.getElementById("bgGif").style.background =
      "url('gif/source.gif') center center";
    // document.getElementById('bgGif').style.backgroundSize = "cover";
    document.getElementById("bgGif").style.backgroundAttachment = "fixed";
    // document.getElementById('bgGif').style.backgroundColor = "green";
    x = 1;

    loopstart();
  }
  var thanh = document.getElementsByName('thanh');
  thanh[0].click();
}

var y = 0;
function turnlight(z) {
  if (document.getElementById(z).style.opacity == "1") {
    document.getElementById(z).style.opacity = "0";
  } else {
    document.getElementById(z).style.opacity = "1";
  }
  if (
    document.getElementById("c1").style.opacity == "1" &&
    document.getElementById("c2").style.opacity == "1"
  ) {
    document.getElementById("gioithieu").style.backgroundColor =
      "rgba(255, 172, 172, 0.356)";
    // switchLight();
  } else {
    document.getElementById("gioithieu").style.backgroundColor =
      "rgba(37, 35, 35, 0.24)";
  }
}

function switchLight() {
  document.getElementById("click").play();
  if (
    (document.getElementById("c1").style.opacity == "1") |
    (document.getElementById("c2").style.opacity == "1")
  ) {
    document.getElementById("c1").style.opacity = "0";
    document.getElementById("c2").style.opacity = "0";
    document.getElementById("bass").pause();
  } else {
    document.getElementById("c1").style.opacity = "1";
    document.getElementById("c2").style.opacity = "1";
    document.getElementById("bass").play();
  }

  if (
    document.getElementById("c1").style.opacity == "1" &&
    document.getElementById("c2").style.opacity == "1"
  ) {
    document.getElementById("gioithieu").style.backgroundColor =
      "rgba(255, 172, 172, 0.356)";
  } else {
    document.getElementById("gioithieu").style.backgroundColor =
      "rgba(37, 35, 35, 0.24)";
  }
}
var avgCheck = 0;
function loop(x) {
  if (avgCheck > 20) {
    document.getElementById("img").style.boxShadow = "unset";
    document.getElementById("BgColor").style.backgroundColor = "unset";
    avgCheck = 0;
    return false;
  } else {
    window.requestAnimationFrame(loop);
    fbc = new Uint8Array(depzai.frequencyBinCount);
    depzai.getByteFrequencyData(fbc);
    avg = fbc.reduce((a, b) => a + b, 0) / fbc.length;

    document.getElementById("img").style.height = (avg + 240) * 1.5 + "px";
    document.getElementById("img").style.width = (avg + 240) * 1.5 + "px";
    document.getElementById("imgin").style.height =
      (avg + 240) * 1.5 + 20 + "px";
    document.getElementById("img").style.boxShadow =
      "0px 0px 5px white, 0px 0px 20px white, 0px 0px " +
      (avg + 50) +
      "px white,0px 0px " +
      (avg + 150) +
      "px white, 0px 0px " +
      (avg + 150) +
      "px white";
    document.getElementById("BgColor").style.backgroundColor = "rgb("+avg*1.7+","+avg*2+","+avg*3+")";

    if (avg == 0) {
      avgCheck++;
    }
    // console.log(avgCheck);
    console.log(avg);
  }
}

// document.getElementById('img').onclick()= () =>{
