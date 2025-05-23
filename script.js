// Function to add leading zero if needed
const padZero = (num) => num.toString().padStart(2, '0');

// Function to format and update the time and date
function updateClock() {
  const now = new Date();

  const hours = padZero(now.getHours());
  const minutes = padZero(now.getMinutes());
  const seconds = padZero(now.getSeconds());

  let timeString = now.toLocaleTimeString('en-US', { hour12: true });
  document.getElementById('time').textContent = timeString;

  const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
  const dateString = now.toLocaleDateString('en-US', options);
  document.getElementById('date').textContent = dateString;
}

// Update the clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);