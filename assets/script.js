
$('#currentDay').text(moment().format("MMM Do YYYY h:mm:ss a"));
var liveHour = moment().hours();

function timeColor () {
$(".time-block").each(function() {    
    var timeBHour = parseInt($(this).attr("id"));    
        if (timeBHour < liveHour) {
            $(this).addClass('future');

        }else if (timeBHour === liveHour) {
            $(this).addClass('present');
    
        }else {
            $(this).addClass('past');
        }
    }) 
};
timeColor();