// Function to update the time for a specific timezone
function updateTime(elementId, timeZone) {
    const options = { timeZone: timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const time = new Date().toLocaleTimeString('en-US', options);
    document.getElementById(elementId).querySelector('.time').textContent = time;
}

// Update time for each clock every second
function startClocks() {
    setInterval(() => {
        updateTime('newyork', 'America/New_York');
        updateTime('london', 'Europe/London');
        updateTime('delhi', 'Asia/Kolkata');
        updateTime('tokyo', 'Asia/Tokyo');
        updateTime('sydney', 'Australia/Sydney');
    }, 1000);
}

// Start the clocks when the page loads
window.onload = startClocks;
