window.onload = displayClock();

function displayClock() {
    var d = new Date();
    var h =  d.getHours();
    var m =  (mins = ('0' + d.getMinutes()).slice(-2));
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerText = m;
}
setInterval(displayClock, 1000)