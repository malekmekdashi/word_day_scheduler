// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


$('#currentDay').text(moment().format("MMM Do YYYY h:mm:ss a"));

var timeBlockEl = document.querySelector('.container');


function timeColor () {
$(".time-block").each(function() {    
    const liveHour = moment().hours();
    const timeBHour = parseInt($(this).attr('id'));    
        if (timeBHour < liveHour) {
            $(this).addClass('past');

        }else if (timeBHour === liveHour) {
            $(this).addClass('present');

        }else {
            $(this).addClass('future');

        }
    }) 
};



$('.saveBtn').on('click', function() {
    var inputValue = $(this).siblings('.description').val();
    var timeValue = $(this).parent('id');

    localStorage.setItem(inputValue, timeValue );
});
// $('#item1 .description').val(localStorage.getItem('item1'));


timeColor();