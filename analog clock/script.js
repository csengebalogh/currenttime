const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//setInterval!!


//create date object
var date = new Date()

//get current hr, min, sec from the date obj
let hr = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()

//declare lets for eah position
let hrPos = (hr*360/12)+(min*(360/60)/12)
let minPos = (min*360/60)+(sec*(360/60)/60)
let secPos = sec*360/60


//wrap it in a function, so it can move
function runTheClock() {
    

    secPos = secPos + 6
    minPos = minPos + (6/60)
    hrPos = hrPos + (3/360)

    //rotate with vars
    HOURHAND.style.transform = "rotate(" + hrPos + "deg)"
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)"
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)"
}

var interval = setInterval(runTheClock, 1000)

