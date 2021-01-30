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

  $("#title").html("<h1>PlanIt</h1>");
  $("#enterBtn").append();
  
  
  $('#enterBtn').on('click', function() {
      $(".main-container").hide();
      $(".planner-container").show();
  });

  // var timeInputs = JSON.parse(localStorage.getItem('timeInputs')) || {};
  var todaysDate = moment().format("MMMM-DD-YYYY");
  // console.log(currentHour);

  let workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  let hourText = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  let workTasks = ["", "", "", "", "", "", "", "", ""];

  // Today's date
  $("#currentDay").text(todaysDate);

  //Color classes change depending on the time
  var TimeTracker = {
    hour: function () {
      return moment().hour();
    },
    timecheck: (hourArray, hour) => {
      let h = hour;
      let hr = hourArray;
      // console.log(hr);

      setInterval(
        () => {
          let mainDiv = document.getElementsByClassName("description");

          for (let i = 0; i < mainDiv.length; i++) {
            const element = mainDiv[i];
            console.log(element);
            if (h < hr[i]) {
              $(element).attr("class", "description col-10 future");
    
            } else if (h > hr[i]) {
              $(element).attr("class", "description col-10 past");
              
            } else {
              $(element).attr("class", "description col-10 present");
             
            }
          }
        },
        200,
        hr
      );
    },
  };

  TimeTracker.timecheck(workHours, TimeTracker.hour());

 //Save tasks to local storage
 function saveTask() {
    // Saving data
    localStorage.setItem("workTaskArray", JSON.stringify(workTasks));
  }

  function loadTask() {
    // Retrieving data
    let savedTask = JSON.parse(localStorage.getItem("workTaskArray"));
    if (savedTask !== null) {
      workTasks = savedTask;
    //   console.log("JSON Saved data loaded");
    //   console.log(workTasks);
    } else {
    //   console.log("JSON saved data set empty");
    }
  }
  loadTask();


  //Append elements to DOM
  for (let i = 0; i < workHours.length; i++) {
    $(
      "<div class='row'><div class='hour col-1'>" +
        hourText[i] +
        "</div><textarea name='text' id='" +
        workHours[i] +
        "' class='description col-10'>" +
        workTasks[i] +
        "</textarea><button class='saveBtn col-1'><i class='far fa-save'></i></button>"
    ).appendTo(".container");
  }

  
  $(".saveBtn").on("click", function () {
    // alert(".saveBtn clicked " + this);
    for (let i = 0; i < workHours.length; i++) {
      // log of array data
      let temp = "#";
      temp = temp + workHours[i];
    //   console.log(temp);
      let temptemp = $(temp).val();
    //   console.log(temptemp);
      workTasks[i] = temptemp;
    }
    saveTask();
  });
});
