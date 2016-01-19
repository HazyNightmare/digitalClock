$(document).ready(function() {
    function startTime() {
        //Create a new Date object
        var today = new Date();
        
        //Get the hours, mins, and seconds off of that object
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        
        //Call check time to add zeros if needed 
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);
        
        //Put the hours, min, and seconds into a readable string
        var formatedDate = h + ":" + m + ":" + s;
        
        //Get the element #text and update the innerHTML to formatedDate
        $('#textClock').html(formatedDate);
        
        //Call startTime() after half a second
        var t = setTimeout(startTime, 500);
    }

    function checkTime(input) {
        if (input < 10) {
            //Adds a zero to the front of numbers if they're less than 10
            input = "0" + input;
        }
        return input;
    }
    
    
    startTime();
});
