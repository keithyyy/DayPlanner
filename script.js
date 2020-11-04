$(document).ready(function() {

    const dateDisplay = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').text(dateDisplay);


    var timeslots = ['9am','10am','11am','12pm','1pm','2pm','3pm','4pm','6pm'];

    for (let i = 0; i < timeslots.length; i++) {
        var slot = $("<div>");
        var hour = $("<div>");
        var description = $('<textarea>');
        var saveInfo = $('<button>');
        var saveIcon = $('<span>');
        var currentHour = moment().format('ha');
        console.log(currentHour > timeslots[0])
        
    

        if (currentHour === timeslots[i]) {
            description.toggleClass('present')
        }

        if (currentHour > timeslots[i]) {
            description.toggleClass('past')
        };

        if (currentHour < timeslots[i]) {
            description.toggleClass('future')
        };

        slot.addClass("row time-block");
        hour.addClass("hour");
        description.addClass('description');
        saveInfo.addClass('saveBtn');
        saveIcon.addClass("far fa-save");
        
        description.attr('id', timeslots[i]);
        hour.text(timeslots[i]);
        $('.container').append(slot);
        $(saveInfo).append(saveIcon);         
        $(slot).append(hour, description, saveInfo);


    };

    var nineAmInput = $('#9am');
    var tenAmInput = $('#10am');
    var elevenAmInput = $('#11am');
    var twelvePmInput = $('#12am');
    var onePmInput = $('#1pm');
    var twoPmInput = $('#2pm');
    var threePmInput = $('#3pm');
    var fourPmInput = $('#4pm');
    var fivePmInput = $('#5pm');


    

    $(".saveBtn").on('click', function(event) {
        event.preventDefault();

        var todaySchedule = {
            nineAm: nineAmInput.val(),
            tenAm: tenAmInput.val(),
            elevenAm: elevenAmInput.val(),
            twelvePm: twelvePmInput.val(),
            onePm: onePmInput.val(),
            twoPm: twoPmInput.val(),
            threePm: threePmInput.val(),
            fourPm: fourPmInput.val(),
            fivePm: fivePmInput.val(),
        };

        localStorage.setItem('todaySchedule', JSON.stringify(todaySchedule));


    });

    var savedSchedule = JSON.parse(localStorage.getItem("todaySchedule"));
    $(nineAmInput).text(savedSchedule.nineAm);
    $(tenAmInput).text(savedSchedule.tenAm);
    $(elevenAmInput).text(savedSchedule.elevenAm);
    $(twelvePmInput).text(savedSchedule.twelvePm);
    $(onePmInput).text(savedSchedule.onePm);
    $(twoPmInput).text(savedSchedule.twoPm);
    $(threePmInput).text(savedSchedule.threePm);
    $(fourPmInput).text(savedSchedule.fourPm);
    $(fivePmInput).text(savedSchedule.fivePm);
    

    




})