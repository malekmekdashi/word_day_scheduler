
$('#currentDay').text(moment().format("MMM Do YYYY h:mm:ss a"));


function timeColor () {

$(".time-block").each(function() {    
    
    liveHour = moment().hours();
    
    timeBHour = parseInt($(this).attr("id"));    
        if (timeBHour < liveHour) {
            $(this).addClass('past').removeClass("present future");

        }else if (timeBHour === liveHour) {
            $(this).addClass('present').removeClass("past future");
    
        }else {
            $(this).addClass('future').removeClass("past present");
        }
    }) 
};
timeColor();

