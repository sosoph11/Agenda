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
        events.forEach((event, index) => {
            const li = document.createElement('li');
            li.textContent = `${event.name} - ${event.date}`;

            //Boton para editar el evento
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.onclick = () => editEvent(index);

            //Boton para eliminar el evento
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.onclick = () => deleteEvent(index);

            li.appendChild(editButton);
            li.appendChild(deleteButton);
            eventList.appendChild(li);
        });
    }

    function editEvent(index) {
        const event = events[index];
        document.getElementById('event-name').value = event.name;
        document.getElementById('event-date').value = event.date;
        events.splice(index, 1); // Elimina el evento original de la lista
        displayEvents(); // Actualiza la lista de eventos
    }

    function deleteEvent(index) {
        events.splice(index, 1); // Elimina el evento del arreglo / Usa splice para quitar el evento del arreglo events en el índice dado.
        displayEvents(); // Actualiza la lista de eventos
    }

    //Formulario de notificaciones
    document.getElementById('notification-form').addEventListener('submit', (e) => {
        e.preventDefault(); //  evita que la página se recargue al enviar el formulario.
        const notificationMessage = document.getElementById('notification-message').value;
        if (notificationMessage) {
            notifications.push(notificationMessage);
            displayNotification(notificationMessage);
            document.getElementById('notification-form').reset();
        }
    });

    // Mostrar la notificación en la interfaz.
    function displayNotification(message) {
        const notificationList = document.getElementById('notification-list');
        const li = document.createElement('li');
        li.textContent = message;
        notificationList.appendChild(li);
    }
});
