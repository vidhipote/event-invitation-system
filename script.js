// script.js

// Function to handle event search
function searchEvents() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const events = document.querySelectorAll('.event-item'); // Assuming you have event items
    events.forEach(event => {
        const title = event.querySelector('.event-title').textContent.toLowerCase();
        if (title.includes(query)) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
}

// Function to add event listeners for search functionality
function setupSearch() {
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', searchEvents);
    }
}

// Function to handle adding to favorites
function addToFavorites(event) {
    const eventTitle = event.target.closest('.event-item').querySelector('.event-title').textContent;
    alert(`${eventTitle} has been added to your favorites!`);
}

// Function to handle booking tickets
function bookTicket(event) {
    const eventTitle = event.target.closest('.event-item').querySelector('.event-title').textContent;
    alert(`You have booked a ticket for ${eventTitle}.`);
}

// Function to initialize event listeners on the event list
function setupEventListeners() {
    const favoriteButtons = document.querySelectorAll('.add-to-favorites');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', addToFavorites);
    });

    const bookButtons = document.querySelectorAll('.book-ticket');
    bookButtons.forEach(button => {
        button.addEventListener('click', bookTicket);
    });
}

// Function to show a popup message
function showPopup(message) {
    const popup = document.getElementById('popup');
    popup.querySelector('p').textContent = message;
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Initialize all functionalities
function init() {
    setupSearch();
    setupEventListeners();
}

// Call init on page load
document.addEventListener('DOMContentLoaded', init);

