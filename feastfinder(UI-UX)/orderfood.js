// Initialize and add the map
function initMap() {
    // The location of your chosen restaurant
    const location = { lat: 40.712776, lng: -74.005974 }; // Example: New York City
    // The map, centered at the location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: location,
    });
    // The marker, positioned at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map,
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
