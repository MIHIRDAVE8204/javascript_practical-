function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourElement = document.getElementById('hour');
    const minuteElement = document.getElementById('minute');
    const secondElement = document.getElementById('second');

    const hourRotation = (hours + minutes / 60) * 360 / 12;
    const minuteRotation = (minutes + seconds / 60) * 360 / 60;
    const secondRotation = (seconds / 60) * 360;

    hourElement.style.transform = `rotate(${hourRotation}deg)`;
    minuteElement.style.transform = `rotate(${minuteRotation}deg)`;
    secondElement.style.transform = `rotate(${secondRotation}deg)`;
  }

  setInterval(updateClock, 1000);
  updateClock(); // Initial call to set the initial clock state
