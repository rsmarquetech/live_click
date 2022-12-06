
function getTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var day = date.getDay();
    var d = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
    var hours = h % 12;

    // Getting Day
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for(var i = 0; i<=days.length; i++){
        if(day == i){
            document.querySelector('.day').innerHTML = days[i];
        }
    }
    
    // Geting Date/Month
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for(var i = 0; i<=months.length; i++){
        if(month == i){
            document.querySelector('.date').innerHTML = d +" " + " "+ months[i]+ " "+ year;
        }
    } 

    if(hours.toString().length == 1){
        document.querySelector('.h').innerHTML = "0" + hours + " : ";
    }else{
        document.querySelector('.h').innerHTML = hours + " : ";
    }

    if(m.toString().length == 1){
        document.querySelector('.m').innerHTML = " 0"+m;
    }else{
        document.querySelector('.m').innerHTML = m;
    }

    if(s.toString().length == 1){
        document.querySelector('.seconds').innerHTML = " 00 : 0"+s;
    }else{
        document.querySelector('.seconds').innerHTML =" 00 : " + s;
    }

    //Am/Pm
    var ampm = h <= 12 ? "AM" : "PM";
    document.querySelector('.am-pm').innerHTML = ampm;
    
    document.querySelector('.secondHand').style.transform = `rotate(${s*6}deg)`;
}

setInterval(getTime,0);