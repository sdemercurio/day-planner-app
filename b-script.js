/*
If I click on a button
    the planner opens up

If I type information into the designated space
    I can save the information to my planner
    The information is saved when I refresh the page

Depending on what time it is
    Hours that passed are color coded differently
    than the current hour and future hours
*/

// // Elements on home page
// $("#title").html("<h1>Most Events Are Planned</h1>");
// $("#enterBtn").append();

// // Elements on planner page
// $("#heading").html("<h2>Your Week At A Glance</h2>");
// $("#sub-head").html("<h3>Make It Happen</h3>");

// $('#enterBtn').on('click', function() {
//     $(".main-container").hide();
//     $(".planner-container").show();
// });

$(document).ready(function () {
    // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};
    var currentHour = moment().format("hh A");
    var todaysDate = moment().format("MMMM-DD-YYYY");
    console.log(currentHour);
    
    //Create Variable with the hours.
    var timeInputs = [
        
        { time: 9, input: "" },
        { time: 10, input: "" },
        { time: 11, input: "" },
        { time: 12, input: "" },
        { time: 1, input: "" },
        { time: 2, input: "" },
        { time: 3, input: "" },
        { time: 4, input: "" },
        { time: 5, input: "" },
    ]
    //Show Today's date on the DOM
    function displayDate() {
        $("#currentDay").text(todaysDate);
    }

     //Show Hours on the DOM
     function hourBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            // console.log(timeInputs[i].time, timeInputs[i].input);
            var plannerRow = $('<div class="input-group mb-3 row">');
            var plannerRowPrepend = $('<div class="input-group-prepend" time-block>');
            var hour = $('<span class="hour">' + timeInputs[i].time + ':00' + '</span>');
            plannerRowPrepend.append(hour);
            var inputEl = $('<textarea type="text" class="description form-control"></textarea>');
            var plannerRowAppend = $('<div class="input-group-append">');
            var saveBtn = $('<button>Save</button></span>');
            plannerRowAppend.append(saveBtn);
            plannerRow.append(plannerRowPrepend).append(inputEl).append(plannerRowAppend);
            $(".container").append(plannerRow);
        }
    }

    hourBlocks();
    displayDate();

});