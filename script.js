document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const location = document.getElementById('event-location').value;
    const description = document.getElementById('event-description').value;

    // Here you would typically send this data to your API
    console.log({ title, date, location, description });
});
