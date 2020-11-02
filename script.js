$(document).ready(function() {

    const dateDisplay = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').text(dateDisplay);


    var timeslots = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'];

    for (let i = 0; i < timeslots.length; i++) {
        var slot = $("<div>");
        var description = $('<textarea>');
        var saveInfo = $('<button>');

        slot.addClass("row time-block hour");
        description.addClass('textarea');
        saveInfo.addClass('saveBtn');
        
        slot.attr('data-number', timeslots[i]);
        slot.text(timeslots[i]);
        $('.container').append(slot);
        


    }






})