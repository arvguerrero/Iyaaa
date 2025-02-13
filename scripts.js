// Countdown Timer for Special Moment
const countdownDate = new Date("2025-02-14T12:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If countdown finishes
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "It's time to celebrate our love! 💖";
    }
}, 1000);
