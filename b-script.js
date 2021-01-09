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

I have a button
    When I click the button saveBtn, it saves the input
    When I resresh the page, the input remains in the textarea
    The input clears at the end of the day.
*/

$(document).ready(() => {
        
    // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};
    var todaysDate = moment().format("MMMM-DD-YYYY");
    // console.log(currentHour);


    let workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
    let hourText = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

    // Today's date
    $("#currentDay").text(todaysDate);

    //Append elements to DOM
    for (let i = 0; i < workHours.length; i++) {
        $("<div class='row'><div class='hour col-1' id='" + workHours[i] + "'>" + hourText[i] + "</div><textarea name='text' id='input' class='description col-10' placeholder= 'Type something here'></textarea><button class='saveBtn col-1'><i class='far fa-save'></i></button>"
        ).appendTo(".container");
    }

    var TimeTracker = {
        hour: function () { return moment().hour(); },
        timecheck: (hourArray, hour) => {
            let h = hour;
            let hr = hourArray;
            console.log(hr);

            setInterval(() => {

                let mainDiv = document.getElementsByClassName('description');

                for (let i = 0; i < mainDiv.length; i++) {
                    const element = mainDiv[i];
                    console.log(element);
                    if (h < hr[i]) {
                        $(element).attr("class", "description col-10 future")
                        // console.log("future: " +
                        //     `current hour -> ${h} is less than event hour -> ${hr[i]}
                        //     ${element.classList}`); //LOG
                    } else if (h > hr[i]) {
                        $(element).attr("class", "description col-10 past")
                        // console.log("past: " +
                        //     `current hour -> ${h} is more than event hour -> ${hr[i]}
                        //      ${element.classList}`); //LOG
                    } else {
                        $(element).attr("class", "description col-10 present")
                        // console.log("present: " +
                        //     `current hour -> ${h} is equal to event hour -> ${hr[i]}
                        //      ${element.classList}`); //LOG
                    }
                }
            }, 1000, hr);
        },
    }

    TimeTracker.timecheck(workHours, TimeTracker.hour());

    

   
});