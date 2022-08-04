
$('#currentDay').text(moment().format("MMM Do YYYY"));

function timeColor () {
var hour = $('#currentDay').text(moment().format("MMM Do YYYY"));

$(".time-block").each(function() {
    
var currentHour = hour;    
    if (currentHour > hour) {
        $(this).addClass('future');

    }else if (currentHour === hour) {
        $(this).addClass('present');
    
    }else {
        $(this).addClass('past');
    }
}) 
};
// parseInt($(this).attr("id"))\
// moment().hour()