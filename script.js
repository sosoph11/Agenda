document.addEventListener('DOMContentLoaded', () => {
    const registerSection = document.getElementById('register-section');
    const eventsSection = document.getElementById('events-section');
    const notificationsSection = document.getElementById('notifications-section');

    document.getElementById('register-btn').addEventListener('click', () => {
        registerSection.classList.remove('hidden');
        eventsSection.classList.add('hidden');
        notificationsSection.classList.add('hidden');
    });

    document.getElementById('events-btn').addEventListener('click', () => {
        registerSection.classList.add('hidden');
        eventsSection.classList.remove('hidden');
        notificationsSection.classList.add('hidden');
    });

    document.getElementById('notifications-btn').addEventListener('click', () => {
        registerSection.classList.add('hidden');
        eventsSection.classList.add('hidden');
        notificationsSection.classList.remove('hidden');
    });

    const users = [];
    const events = [];
    const notifications = [];

    document.getElementById('register-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
            users.push({ username, password });
            alert('Usuario registrado con éxito!');
            document.getElementById('register-form').reset();
        }
    });

    document.getElementById('event-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        if (eventName && eventDate) {
            const event = { name: eventName, date: eventDate };
            events.push(event);
            displayEvents();
            displayNotification(`Nuevo evento agregado: ${eventName}`);
            document.getElementById('event-form').reset();
        }
    });

    function displayEvents() {
        const eventList = document.getElementById('event-list');
        eventList.innerHTML = '';
        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `${event.name} - ${event.date}`;
            eventList.appendChild(li);
        });
    }

    function displayNotification(message) {
        const notificationList = document.getElementById('notification-list');
        const li = document.createElement('li');
        li.textContent = message;
        notificationList.appendChild(li);
    }
});
