function bookSlot(mentorName, timeSlot) {
    const notificationDiv = document.getElementById('notification');
    notificationDiv.innerHTML = `
        <p>You have successfully booked a session with <strong>${mentorName}</strong> at <strong>${timeSlot}</strong>.</p>
    `;

    
    const clickedButton = event.target;

    
    clickedButton.disabled = true;
    clickedButton.style.backgroundColor = '#6c757d';
    clickedButton.innerText = 'Booked';
}
