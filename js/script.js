var deadline = new Date(2018, 0, 15, 20, 00);

function timer() {
    setInterval(function () {
        var now = new Date();

        var secondsLeft = Math.floor((deadline - now)/1000);
        var minutesLeft = Math.floor(secondsLeft / 60);
        var hoursLeft = Math.floor(minutesLeft / 60);
        var daysLeft = Math.floor(hoursLeft / 24);

        secondsLeft %= 60;
        minutesLeft %= 60;
        hoursLeft %= 24;

        secondsLeft = (secondsLeft < 10) ? '0' + secondsLeft : secondsLeft;
        minutesLeft = (minutesLeft < 10) ? '0' + minutesLeft : minutesLeft;
        hoursLeft = (hoursLeft < 10) ? '0' + hoursLeft : hoursLeft;
        daysLeft = (daysLeft < 10) ? '0' + daysLeft : daysLeft;

        document.querySelector('.days').textContent = daysLeft;
        document.querySelector('.hours').textContent = hoursLeft;
        document.querySelector('.minutes').textContent = minutesLeft;
        document.querySelector('.sec').textContent = secondsLeft;
    }, 1000)
}

timer();