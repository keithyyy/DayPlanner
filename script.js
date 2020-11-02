$(document).ready(function() {

    const dateDisplay = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').text(dateDisplay);


    var timeslots = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'];

    for (let i = 0; i < timeslots.length; i++) {
        var slot = $("<div>");
        slot.addClass("row time-block hour description textarea");
        slot.attr('data-number', timeslots[i]);
        slot.text(timeslots[i]);
        $('.container').append(slot);
    }






})