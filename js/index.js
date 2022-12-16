document.addEventListener("DOMContentLoaded", () => {
    var but = document.getElementById("but");
    var stop = document.getElementById("stop");
    var video = document.getElementById("vid");
    var cil1 = document.getElementById("cil1");
    var pre = document.getElementById("pre");
    var mediaDevices = navigator.mediaDevices;
    vid.muted = true;
    but.addEventListener("click", () => {
        mediaDevices
        .getUserMedia({
            video: true,
            audio: false,
        })
        .then((stream) => {
            video.srcObject = stream;
            video.addEventListener("loadedmetadata", () => {
            video.play();
            });
        })
        .catch(alert);
    });
    but.onclick = function (){
    pre.style.display = "none"
    video.style.display = "block"
    }
    stop.onclick = function sto(){
        pre.style.display = "block"
        video.style.display = "none"
        mediaDevices
        .getUserMedia({
            video: false,
        })
        .then(function (screen) {
            video.srcObject = screen;
            video.addEventListener("loadedmetadata", () => {
                video.play(false);
            });
        })
    }
    });