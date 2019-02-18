//Map for Preston
function prestonMap() {
    var mapProp = {
        center: new google.maps.latlng(42.0963, -111.8766),
        zoom: 12,
    };
    var map = new google.maps.Map(documment.getElementById("googleMap"), mapProp);
}