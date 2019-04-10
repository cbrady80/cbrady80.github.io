//Map for Bethesda
function bethesdaMap() {
    var mapProp = {
        center: new google.maps.LatLng(38.9832229, -77.0960054),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}