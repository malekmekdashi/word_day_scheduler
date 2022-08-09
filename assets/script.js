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


$('#currentDay').text(moment().format("MMM Do YYYY h:mm a"));

function timeColor () {
$(".time-block").each(function() {    
    const liveHour = moment().hours();
    const timeBHour = parseInt($(this).attr('id'));    
        if (timeBHour < liveHour) {
            $(this).addClass('past');
            $(this).removeClass('present future');

        }else if (timeBHour === liveHour) {
            $(this).addClass('present');
            $(this).removeClass('past future');

        }else {
            $(this).addClass('future');
            $(this).removeClass('past present');
        }
    }) 
};


$('.saveBtn').on('click', function() {
    var inputValue1 = $('.description1').val();
    var inputValue2 = $('.description2').val();
    var inputValue3 = $('.description3').val();
    var inputValue4 = $('.description4').val();
    var inputValue5 = $('.description5').val();
    var inputValue6 = $('.description6').val();
    var inputValue7 = $('.description7').val();
    var inputValue8 = $('.description8').val();
    var inputValue9 = $('.description9').val();
   
    localStorage.setItem("inputValue", inputValue1);
    localStorage.setItem("inputValue1", inputValue2);
    localStorage.setItem("inputValue2", inputValue3);
    localStorage.setItem("inputValue3", inputValue4);
    localStorage.setItem("inputValue4", inputValue5);
    localStorage.setItem("inputValue5", inputValue6);
    localStorage.setItem("inputValue6", inputValue7);
    localStorage.setItem("inputValue7", inputValue8);
    localStorage.setItem("inputValue8", inputValue9);
  
});

$('.description1').val(localStorage.getItem('inputValue'));    
$('.description2').val(localStorage.getItem('inputValue1'));
$('.description3').val(localStorage.getItem('inputValue2'));
$('.description4').val(localStorage.getItem('inputValue3'));
$('.description5').val(localStorage.getItem('inputValue4'));
$('.description6').val(localStorage.getItem('inputValue5'));
$('.description7').val(localStorage.getItem('inputValue6'));
$('.description8').val(localStorage.getItem('inputValue7'));
$('.description9').val(localStorage.getItem('inputValue8'));

timeColor();
