/* CURRENTLY IN: javascript/main.js */

var APIKEY = 'YOUR API KEY HERE';
var APIURL = 'https://maps.googleapis.com/maps/api/js?key='+APIKEY+'&callback=initMap'
DepManager(APIURL,'google')
.then(function() {
    var map = GMap.init( 'map', {
        center: {lat: 40.7127, lng: -74.0059},
        zoom: 14
    })
    .bindEventHandler('click', function( e, methods, map, options, mapSelector ) {
        // wont show up in actual console, fyi
        var latLng = methods.getEventLatLng( e );
        document.querySelector('.coords').innerHTML = '<div><b>LAT</b> ' + latLng.lat + ',</div><div><b>LNG</b> ' + latLng.lng + '</div>';
    })
    .bindEventHandler('dragend', function( e, methods, map ) {
        var newCenter = methods.getCenter( map );
        document.querySelector('.drags').innerHTML = '<b>New Center</b> ' + newCenter.lat() + ', ' + newCenter.lng();
    });
});
