// js/script.js for index.html

document.getElementById('search-bar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const events = document.querySelectorAll('#event-list .event-item'); // Assuming you have event items
    events.forEach(event => {
        const title = event.querySelector('.event-title').textContent.toLowerCase();
        if (title.includes(query)) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
});

// Example function to populate events dynamically (you can replace this with actual data fetching)
function loadEvents() {
    const eventList = document.getElementById('event-list');
    const events = [
        { title: 'Concert', date: '2025-06-10', location: 'City Hall' },
        { title: 'Art Exhibition', date: '2025-06-12', location: 'Art Gallery' },
        // Add more events as needed
    ];

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3 class="event-title">${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
        `;
        eventList.appendChild(eventItem);
    });
}

// Load events on page load
window.onload = loadEvents;
