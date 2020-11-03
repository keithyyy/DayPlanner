$(document).ready(function() {

    const dateDisplay = moment().format("dddd, MMMM Do YYYY");
    $('#currentDay').text(dateDisplay);

    
    
    

    
    


    var timeslots = ['9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm'];

    for (let i = 0; i < timeslots.length; i++) {
        var slot = $("<div>");
        var hour = $("<div>");
        var description = $('<textarea>');
        var saveInfo = $('<button>');
        var saveIcon = $('<span>');
        var currentHour = moment().format('h a');
    

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
        
        description.attr('id', timeslots[i]);
        hour.text(timeslots[i]);
        $('.container').append(slot);
        $(saveInfo).append(saveIcon);         
        $(slot).append(hour, description, saveInfo);

        

        console.log(timeslots[i])


        



    }

    var nineAmInput = document.querySelector('9 am');
    var tenAmInput = document.querySelector('10 am');
    var elevenAmInput = document.querySelector('11 am');
    var twelvePmInput = document.querySelector('12 am');
    var onePmInput = document.querySelector('1 pm');
    var twoPmInput = document.querySelector('2 pm');
    var threePmInput = document.querySelector('3 pm');
    var fourPmInput = document.querySelector('4 pm');
    var fivePmInput = document.querySelector('5 pm');

    console.log(nineAmInput);

    

    $(".saveBtn").on('click', function(event) {
        event.preventDefault();

        var todaySchedule = {
            nineAm = nineAmInput.value.trim();
            tenAm = tenAmInput.value.trim();
            elevenAm = elevenAmInput.value.trim();
            twelvePm = twelvePmInput.value.trim();
            onePm = onePmInput.value.trim();
            twoPm = twoPmInput.value.trim();
            threePm = threePmInput.value.trim();
            fourPm = fourPmInput.value.trim();
            fivePm = fivePmInput.value.trim();
        }

        console.log(todaySchedule);

        localStorage.setItem('todaySchedule', JSON.stringify(todaySchedule));

        var savedSchedule = JSON.parse(localStorage.getItem("todaySchedule")


    })

    




})