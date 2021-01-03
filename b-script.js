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
    var currentHour = moment().hours();
    var todaysDate = moment().format("dddd, MMMM Do YYYY");
    console.log(currentHour);
    //Create Variable with the hours.
    var timeInputs = [
        
        { time: 9, input: "" },
        { time: 10, input: "" },
        { time: 11, input: "" },
        { time: 12, input: "" },
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 15, input: "" },
        { time: 16, input: "" },
        { time: 17, input: "" },
    ]
    //Show Today's date on the DOM
    function printTime() {
        $("#currentDay").text(todaysDate);
    }
   

    printTime();

});