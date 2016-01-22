$(document).ready(function() {
    
    var twelveHour = true;
    
    //startTime is an IIFE. It is run immediately and then it is called by itself
    (function startTime() {
        //Create a new Date object
        var today = new Date();
        
        //Get the hours and mins off of that object
        var h = today.getHours();
        var m = today.getMinutes();
        
        //Call check time to add zeros if needed 
        h = checkTime(h);
        m = checkTime(m);

        //If twelveHour is true, call the function to change the hour to 12 hours
        if (twelveHour === true) {
            h = toTwelveHour(h);
        }
        
        //Call startTime() and clock() after half a second
        setTimeout(startTime, 500);
        setTimeout(clock(h, m), 500);
    })();
    
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
    
    function checkTime(input) {
        if (input < 10) {
            //Adds a zero to the front of numbers if they're less than 10
            input = "0" + input;
        }
        return input;
    }
    
    function toTwelveHour(input) {
        if (input > 12) {
            input = input % 12;
            input = "0" + input;
        }
        return input;
    }
    
    
    
    //If light-theme button is pressed, change the background 
    //and divs to white and black, respectively.
    $('#light-theme').on('click', function() {
        $('body').css("background-color", "white");
        $('body').css("color", "black");
        $('body').find('.triangle-up').css("border-bottom-color", "black");
        $('body').find('.rectangle').css("background", "black");
        $('body').find('.triangle-down').css("border-top-color", "black");
    });
    
    //If dark-theme button is pressed, change the background 
    //and divs to black and red, respectively.
    $('#dark-theme').click(function() {
        $('body').css("background-color", "black");
        $('body').css("color", "red");
        $('body').find('.triangle-up').css("border-bottom-color", "red");
        $('body').find('.rectangle').css("background", "red");
        $('body').find('.triangle-down').css("border-top-color", "red");
    });
    
    
    //If twelve-hour button is pressed, change twelveHour to true
    $('#twelve-hour').on('click', function() {
        twelveHour = true;
    });
    
    //If twenty-four-hour button is pressed, change twelveHour to false
    $('#twenty-four-hour').click(function() {
        twelveHour = false;
    });
    
    
    
    /*
        These are all fuctions that deteermine what each number looks like when active.
        The reset function is called at the beginning of every function to reset the number
        to eight, so the hidden properties are shown again.
    */
    
    function zero(holderNum) {
        reset(holderNum);
        //var middle-border = $("#content > #holder-" + holderNum + " > .number").find(".middle-border").hide();
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
});
