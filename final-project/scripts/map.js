//Map for Bethesda
function bethesdaMap() {
    var mapProp = {
        center: new google.maps.LatLng(38.9832229, -77.095619),
        zoom: 12,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}