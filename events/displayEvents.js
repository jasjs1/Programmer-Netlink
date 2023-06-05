// Get form and container elements
const form = document.getElementById('event-form');
const container = document.getElementById('event-container');
const eventOrganizer = localStorage.getItem('signup-name')

// Listen for form submission
form.addEventListener('submit', (e) => {
	e.preventDefault();

	// Get form values
	const eventType = document.getElementById('event-type').value;
	const eventDate = document.getElementById('event-date').value;
	const eventTime = document.getElementById('event-time').value;
	const eventLocation = document.getElementById('event-location').value;
	const whosInvited = document.getElementById('whos-invited').value;
	const description = document.getElementById('description').value;

	// Create event object
	const event = {
		eventType,
		eventDate,
		eventTime,
		eventLocation,
		whosInvited,
		description
	};

	// Store event object in local storage
	let events = JSON.parse(localStorage.getItem('events')) || [];
	events.push(event);
	localStorage.setItem('events', JSON.stringify(events));

	// Display added event in container
	displayEvents();

	// Reset form
	form.reset();
});

// Function to display events in container
function displayEvents() {
	container.innerHTML = '';
	const events = JSON.parse(localStorage.getItem('events')) || [];

	if (events.length === 0) {
		const messageElem = document.createElement('h3');
		messageElem.textContent = 'No created events. Please click on the + button to create one.';
		container.appendChild(messageElem);
		return;
	}

	// Edit event display layout here:
	events.forEach((event) => {
		const eventElem = document.createElement('div');
		eventElem.innerHTML = `
        <a id="details" href="http://127.0.0.1:5500/profile/profile.html">${eventOrganizer} · ${event.eventType}</a>
			<h2 id="event-title" style="color: #6466E9;">${event.eventTitle}</h2>
			<h3>${event.eventDate} · ${event.eventTime} · ${event.eventLocation}</h3>
			<p>Description: ${event.description}</p>
			<button class="close-btn" onclick="deleteEvent(${events.indexOf(event)})">Remove Event</button>
	  `;
		container.appendChild(eventElem);
	});
}

// Function to delete event from local storage and container
function deleteEvent(index) {
	let events = JSON.parse(localStorage.getItem('events')) || [];
	events.splice(index, 1);
	localStorage.setItem('events', JSON.stringify(events));
	displayEvents();
}

// Display events on page load
displayEvents();


const showContainerButton = document.getElementById('show-container');
const containerDiv = document.querySelector('.container');

function toggleContainer(action) {
	if (action === 'show') {
		containerDiv.style.display = 'block';
		showContainerButton.textContent = '-';
	} else if (action === 'hide') {
		containerDiv.style.display = 'none';
		showContainerButton.textContent = '+';
	} else if (action === 'toggle') {
		if (containerDiv.style.display === 'none') {
			containerDiv.style.display = 'block';
			showContainerButton.textContent = '-';
		} else {
			containerDiv.style.display = 'none';
			showContainerButton.textContent = '+';
		}
	}
}

showContainerButton.addEventListener('click', function () {
	toggleContainer('toggle');
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		container.style.display = 'none';
	}
});
