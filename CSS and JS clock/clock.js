
const secondsHand = document.querySelector(".second_hand");
const minutesHand = document.querySelector(".minute_hand");
const hourHand = document.querySelector(".hour_hand");

function startClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsHandInDeg = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsHandInDeg}deg)`;

    const minutes = now.getMinutes();
    const minutesInDeg = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesInDeg}deg)`;

    const hours = now.getHours();
    const hourInDeg = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourInDeg}deg)`;
};

setInterval(startClock, 1000)
