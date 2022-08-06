
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
inputValue = "item1";
// $('#item1 .description').val(localStorage.getItem('item1'));


timeColor();