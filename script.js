$(document).ready(function() {

    const dateDisplay = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').text(dateDisplay);

    
    
    

    
    


    var timeslots = ['9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','9 pm'];

    for (let i = 0; i < timeslots.length; i++) {
        var slot = $("<div>");
        var hour = $("<div>");
        var description = $('<textarea>');
        var saveInfo = $('<button>');
        var saveIcon = $('<span>');
        var currentHour = moment().format('h a');

        console.log(currentHour)

        if (currentHour === timeslots[i]) {
            description.toggleClass('present')
        };

        if (currentHour > timeslots[i]) {
            slot.toggleClass('past')
        };

        if (currentHour < timeslots[i]) {
            description.toggleClass('future')
        };

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

        

        console.log(timeslots[i])


        



    }

    $(".saveBtn").on('click', function(event) {
        event.preventDefault();

        thingsPlanned = $('.description').val();

        console.log(thingsPlanned)

        localStorage.setItem("time", JSON.stringify(slot));

    })

    




})