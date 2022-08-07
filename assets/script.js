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
    var inputValue1 = $(this).siblings('.description').val();
    var inputValue2 = $(this).siblings('.description').val();
    var inputValue3 = $(this).siblings('.description').val();
    var inputValue4 = $(this).siblings('.description').val();
    var inputValue5 = $(this).siblings('.description').val();
    var inputValue6 = $(this).siblings('.description').val();
    var inputValue7 = $(this).siblings('.description').val();
    var inputValue8 = $(this).siblings('.description').val();
    var inputValue9 = $(this).siblings('.description').val();

    localStorage.setItem("inputValue", inputValue);
    localStorage.setItem("inputValue1", inputValue1);
    localStorage.setItem("inputValue2", inputValue2);
    localStorage.setItem("inputValue3", inputValue3);
    localStorage.setItem("inputValue4", inputValue4);
    localStorage.setItem("inputValue5", inputValue5);
    localStorage.setItem("inputValue6", inputValue6);
    localStorage.setItem("inputValue7", inputValue7);
    localStorage.setItem("inputValue8", inputValue8);
    localStorage.setItem("inputValue9", inputValue9);
});

$('#inputValue.description').val(localStorage.getItem('inputValue'));    
$('#inputValue1.description').val(localStorage.getItem('inputValue1'));
$('#inputValue2.description').val(localStorage.getItem('inputValue2'));
$('#inputValue3.description').val(localStorage.getItem('inputValue3'));
$('#inputValue4.description').val(localStorage.getItem('inputValue4'));
$('#inputValue5.description').val(localStorage.getItem('inputValue5'));
$('#inputValue6.description').val(localStorage.getItem('inputValue6'));
$('#inputValue7.description').val(localStorage.getItem('inputValue7'));
$('#inputValue8.description').val(localStorage.getItem('inputValue8'));
$('#inputValue9.description').val(localStorage.getItem('inputValue9'));


timeColor();
console.log($('#currentDay'));

// localStorage.setItem("timeValue", timeValue)
// var timeValue = $(this).parent('id')