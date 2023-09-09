function initMap() {
    // Latitude and Longitude
    let myLatLng = {lat: -4.321298,lng:15.275571};

    let map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    let marker = new google.maps.Marker({
        position: kinshasa,
        map: map,
        title: 'kinshasa' // Title Location
    });
}