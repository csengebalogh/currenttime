var h2 = document.getElementById("target")
var h21 = document.getElementById("target2")


function showTimeAndDay () {

    var today = new Date();
    var day = today.getDay()
    var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]

    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var prepand = (hour >= 12) ? "PM" : "AM"


    hour =  (hour >= 12)? hour - 12: hour;
    if (hour===0 && prepand===' PM ') { 
            if (minute===0 && second===0) {
                hour=12; prepand= ' Noon ' 
            } else {
                hour=12; prepand= ' PM ' 
            }
    }

    if (hour===0 && prepand===' AM ') { 
            if (minute===0 && second===0) {
                hour=12; prepand=' Midnight';
            } else {
                 hour=12; prepand= ' AM ' 
            }

    } 
     h2.innerHTML = "Today is : " + daylist[day] + "."
     h21.innerHTML = "Current Time : "+hour + prepand + " : " + minute + " : " + second

        //  console.log("Today is : " + daylist[day] + ".")
        // console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
}
//func is executed in every 1 sec
 var continuous = setInterval(showTimeAndDay, 1000)