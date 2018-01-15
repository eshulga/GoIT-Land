var deadline = new Date(2018, 0, 23, 20, 00);

function timer() {
    setInterval(function () {
        var now = new Date();

        var secondsLeft = Math.floor((deadline - now)/1000);
        var minutesLeft = Math.floor(secondsLeft / 60);
        var hoursLeft = Math.floor(minutesLeft / 60);
        var daysLeft = Math.floor(hoursLeft / 24);
        var msec = Math.floor((deadline - now)/10);

        secondsLeft %= 60;
        minutesLeft %= 60;
        hoursLeft %= 24;
        msec %=100;

        secondsLeft = (secondsLeft < 10) ? '0' + secondsLeft : secondsLeft;
        minutesLeft = (minutesLeft < 10) ? '0' + minutesLeft : minutesLeft;
        hoursLeft = (hoursLeft < 10) ? '0' + hoursLeft : hoursLeft;
        daysLeft = (daysLeft < 10) ? '0' + daysLeft : daysLeft;
        msec = (msec < 10) ? '0' + msec : msec;

        document.querySelector('.days').textContent = daysLeft;
        document.querySelector('.hours').textContent = hoursLeft;
        document.querySelector('.minutes').textContent = minutesLeft;
        document.querySelector('.sec').textContent = secondsLeft;
        document.querySelector('.msec').textContent = msec;
    }, 100)
}

timer();