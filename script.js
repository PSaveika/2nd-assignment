var headerContent = document.querySelector(".bg-video");

document.body.addEventListener("scroll", function(event) {
    var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
    var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;

    document.documentElement.style.setProperty('--opacity', opacity);
    document.documentElement.style.setProperty('--scale', scale);
});

var aud0 = document.querySelector(".audio-0");

function pause0() {
    aud0.pause();
}

var aud1 = document.querySelector(".audio-1");

function pause1() {
    aud1.pause();
}

var aud2 = document.querySelector(".audio-2");

function pause2() {
    aud2.pause();
}
