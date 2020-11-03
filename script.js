$(document).ready(function() {

    const dateDisplay = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').text(dateDisplay);


    var timeslots = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM'];

    for (let i = 0; i < timeslots.length; i++) {
        var slot = $("<div>");
        var hour = $("<div>");
        var description = $('<textarea>');
        var saveInfo = $('<button>');
        var saveIcon = $('<span>');

        slot.addClass("row time-block");
        hour.addClass("hour");
        description.addClass('description');
        saveInfo.addClass('saveBtn');
        saveIcon.addClass("far fa-save");
        
        description.attr('data-index', timeslots[i]);
        hour.text(timeslots[i]);
        $('.container').append(slot);
        $(saveInfo).append(saveIcon);         
        $(slot).append(hour, description, saveInfo);
        



    }

    $(".saveBtn").on('click', function(event) {
        event.preventDefault();

        thingsPlanned = $('.description').val();

        console.log(thingsPlanned)

        localStorage.setItem("time", JSON.stringify(slot));

    })



})