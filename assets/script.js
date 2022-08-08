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
    var inputValue1 = $('#inputValue.description1').val();
    var inputValue2 = $('#inputValue.description2').val();
    var inputValue3 = $('#inputValue.description3').val();
    var inputValue4 = $('#inputValue.description4').val();
    var inputValue5 = $('#inputValue.description5').val();
    var inputValue6 = $('#inputValue.description6').val();
    var inputValue7 = $('#inputValue.description7').val();
    var inputValue8 = $('#inputValue.description8').val();
    var inputValue9 = $('#inputValue.description9').val();
   
    

    localStorage.setItem("item1", inputValue1);
    localStorage.setItem("item2", inputValue2);
    localStorage.setItem("item3", inputValue3);
    localStorage.setItem("item4", inputValue4);
    localStorage.setItem("item5", inputValue5);
    localStorage.setItem("item6", inputValue6);
    localStorage.setItem("item7", inputValue7);
    localStorage.setItem("item8", inputValue8);
    localStorage.setItem("item9", inputValue9);
  
});

$('#inputValue.description1').val(localStorage.getItem('item1'));    
$('#inputValue.description2').val(localStorage.getItem('item2'));
$('#inputValue.description3').val(localStorage.getItem('item3'));
$('#inputValue.description4').val(localStorage.getItem('item4'));
$('#inputValue.description5').val(localStorage.getItem('item5'));
$('#inputValue.description6').val(localStorage.getItem('item6'));
$('#inputValue.description7').val(localStorage.getItem('item7'));
$('#inputValue.description8').val(localStorage.getItem('item8'));
$('#inputValue.description9').val(localStorage.getItem('item9'));



timeColor();


// localStorage.setItem("timeValue", timeValue)
// 