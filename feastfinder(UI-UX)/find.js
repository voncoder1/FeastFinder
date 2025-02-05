// Initialize and add the map
function initMap() {
    // The location of the user (example: New York City)
    const userLocation = { lat: 40.712776, lng: -74.005974 };
    // The map, centered at the user's location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: userLocation,
    });

    // Example: Adding a marker for a restaurant
    const restaurantLocation = { lat: 40.730610, lng: -73.935242 }; // Example: Another location in New York City
    const marker = new google.maps.Marker({
        position: restaurantLocation,
        map: map,
        title: 'Restaurant Name',
    });
}

// Load the map script
function loadMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Call the function to load the map script
loadMapScript();

// Filter restaurants function (example placeholder)
function filterRestaurants() {
    const filter = document.getElementById("filter-options").value;
    console.log(`Filter selected: ${filter}`);
}
