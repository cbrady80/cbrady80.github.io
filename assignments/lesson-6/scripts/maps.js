//Map for Preston
function prestonMap() {
    var mapProp = {
        center: new google.maps.LatLng(42.0963, -111.8766),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}