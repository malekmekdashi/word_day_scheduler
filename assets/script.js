
$('#currentDay').text(moment().format("MMM Do YYYY"));

function timeColor () {
var hour = moment().hour();

$(".time-block").each(function() {
    
var currentHour = parseInt($(this).attr("id"));    
    if (currentHour > hour) {
        $(this).addClass('future');

    }else if (currentHour === hour) {
        $(this).addClass('present');
    
    }else {
        $(this).addClass('past');
    }
}) 
};