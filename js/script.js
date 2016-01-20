var i = 0;

$(document).ready(function() { 
    function startTime() {
        //Create a new Date object
        var today = new Date();
        
        //Get the hours, mins, and seconds off of that object
        var h = today.getHours();
        var m = today.getMinutes();
        
        //Call check time to add zeros if needed 
        h = checkTime(h);
        m = checkTime(m);
        
        //Put the hours, min, and seconds into a readable string
        var formatedDate = h + ":" + m;
        
        //Get the element #text and update the innerHTML to formatedDate
        $('#textClock').html(formatedDate);
        
        //Call startTime() after half a second
        setTimeout(startTime, 1000);
        setTimeout(clock(h, m), 1000);
    }

    function checkTime(input) {
        if (input < 10) {
            //Adds a zero to the front of numbers if they're less than 10
            input = "0" + input;
        }
        return input;
    }
    
    function clock(h, m) {
        //Split hours and mins into an array 
        h = h.toString().split("");
        m = m.toString().split("");

        //Call changeNumber passing the element in the hour array
        //and passing the div holder number
        changeNumber(parseInt(h[0]), "one");
        changeNumber(parseInt(h[1]), "two");
        
        //Call changeNumber passing the element in the minute array
        //and passing the div holder number
        changeNumber(parseInt(m[0]), "three");
        changeNumber(parseInt(m[1]), "four");                
    }
    
    //changeNumber is called and updates the numbers if needed.
    function changeNumber(input, holderNum) {
        input = parseInt(input);
        switch(input) {
            case 0:
                zero(holderNum);
                break;
            case 1:
                one(holderNum);
                break;
            case 2:
                two(holderNum);
                break;
            case 3:
                three(holderNum);
                break;
            case 4:
                four(holderNum);
                break;
            case 5:
                five(holderNum);
                break;
            case 6:
                six(holderNum);
                break;
            case 7:
                seven(holderNum);
                break;
            case 8:
                eight(holderNum);
                break;
            case 9:
                nine(holderNum);
                break;
            default:
                alert("Error. Please make sure you have JavaScript enabled in your browser.");
        }
    }
    
    /*
        These are all fuctions that deteermine what each number looks like when active.
        The reset function is called at the beginning of every function to reset the number
        to eight, so the hidden properties are shown again.
    */
    
    function zero(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".middle-border").hide();
    }
    
    function one(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".top-border").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".middle-border").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-border").hide();
    }
    
    function two(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-right").hide();
    }
    
    function three(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").hide();
    }
    
    function four(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-border").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-border").hide();
    }
    
    function five(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-right").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").hide();
    }
    
    function six(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-right").hide();
    }
    
    function seven(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".middle-border").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-border").hide();
    }
    
    function eight(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".top-left").show();
        $("#content > #holder-" + holderNum + " > .number").find(".top-border").show();
        $("#content > #holder-" + holderNum + " > .number").find(".top-right").show();
        $("#content > #holder-" + holderNum + " > .number").find(".middle-border").show();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").show();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-border").show();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-right").show();    
    }
    
    function nine(holderNum) {
        reset(holderNum);
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").hide();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-border").hide();
    }
    
    function reset(holderNum) {
        $("#content > #holder-" + holderNum + " > .number").find(".top-left").show();
        $("#content > #holder-" + holderNum + " > .number").find(".top-border").show();
        $("#content > #holder-" + holderNum + " > .number").find(".top-right").show();
        $("#content > #holder-" + holderNum + " > .number").find(".middle-border").show();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-left").show();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-border").show();
        $("#content > #holder-" + holderNum + " > .number").find(".bottom-right").show();       
    }
    
    //Call startTime() to start the function.
    //It calls itself so there is no need to call it again.
    startTime();
});
