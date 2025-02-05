// Add event listener to the reservation form
document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    // Retrieve form values
    const restaurant = document.getElementById("restaurant").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const specialRequests = document.getElementById("special-requests").value;

    // Display a confirmation message
    alert(`Your reservation at ${restaurant} on ${date} at ${time} for ${guests} guests has been confirmed! Special requests: ${specialRequests}`);
});
