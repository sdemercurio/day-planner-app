/*
I have an hour slot for each hour of the work day (workHours)
My work day is equal to my work hours (workDay)

I need to check my time every hour beginning on the hour (or every minute for 60 minutes)
I need to check when the day begins (Hour1)
I need to check for currentHour 
I need to check when the day ends (Hour9 or when hours is greater than last work hour)
I need my hours to change from past, current, and future respectively

If I type information into the designated space
    I can save the information to my planner
    The information is saved when I refresh the page

Depending on what time it is
    Hours that passed are color coded differently
    than the current hour and future hours
*/


$(document).ready( () => {
    // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};

    var currentHour = moment().format("h A");
    var todaysDate = moment().format("MMMM-DD-YYYY");
    // console.log(currentHour);
    
    // console.log(currentHour);
    
    let hours = moment().format("h A");


    let workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    // let workHours = [
    //     {time: "9AM", id: "hour1"},
    //     {time: "10AM", id: "hour2"},
    //     {time: "11AM", id: "hour3"},
    //     {time: "12PM", id: "hour4"},
    //     {time: "1PM", id: "hour5"},
    //     {time: "2PM", id: "hour6"},
    //     {time: "3PM", id: "hour7"},
    //     {time: "4PM", id: "hour8"},
    //     {time: "5PM", id: "hour9"},
    // ]
    //Create id for each hour?
    // workHours.forEach((item, i) => {
    //     item.id = i + 1;
    // })
    // console.log(workHours);
    

    let workDay = workHours;
    let startTime = moment().set({hour:9});
    let endTime = moment().set({hour:5});

    
// startOf displays the hour at the top of the hour.
    // console.log(startTime.startOf("hour"));
    // console.log(endTime.startOf("hour"));

// Today's date
    $("#currentDay").text(todaysDate);

    const hour = moment.duration(60, "minutes");
    // console.log(hour);

//Append elements to DOM
for (let i = 0; i < workDay.length; i++) {
    $("<div class='row'><div class='hour col-1' id='"+workDay[i]+"'>"+workDay[i]+"</div><textarea class='description col-10' placeholder= 'Type something here'></textarea><button class='saveBtn col-1'>Save</button>" 
    ).appendTo(".container");
}
    // for (var i = 0; i < workHours.length; i++) {
    //     $("<div class='row'></div>").appendTo(".container");
    // }
    //     // $("div.hour").html(workHours[i].time);
    //     $("<div class='hour col-1'></div>").appendTo(".row");
    //     $("<textarea class='description col-10' placeholder= 'Type something here'></textarea>").appendTo(".row");
    //     $("<button class='saveBtn col-1'>Save</button>").appendTo(".row");

//  console.log(JSON.stringify(hours));
//  moment(60, "m").fromNow();
    
    })
    
   



    