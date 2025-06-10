
function initMap() {
   createCustomMap('map', 'img/icons/location.png', { width: 20, height: 20 });
}

function initMap2() {
   createCustomMap('map2', 'img/icons/location-big.png', { width: 30, height: 40 });
}

function createCustomMap(elementId, iconUrl, iconSize = { width: 20, height: 20 }) {
   const mapElement = document.getElementById(elementId);
   if (!mapElement) return;

   const mapStyle = [
      { "featureType": "all", "elementType": "geometry", "stylers": [{ "color": "#202c3e" }] },
      { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "gamma": 0.01 }, { "lightness": 20 }, { "weight": "1.39" }, { "color": "#ffffff" }] },
      { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "weight": "0.96" }, { "saturation": "9" }, { "visibility": "on" }, { "color": "#000000" }] },
      { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
      { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "lightness": 30 }, { "saturation": "9" }, { "color": "#29446b" }] },
      { "featureType": "poi", "elementType": "geometry", "stylers": [{ "saturation": 20 }] },
      { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "lightness": 20 }, { "saturation": -20 }] },
      { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 10 }, { "saturation": -30 }] },
      { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#193a55" }] },
      { "featureType": "road", "elementType": "geometry.stroke", "stylers": [{ "saturation": 25 }, { "lightness": 25 }, { "weight": "0.01" }] },
      { "featureType": "water", "elementType": "all", "stylers": [{ "lightness": -20 }] }
   ];

   const centerCoords = { lat: 59.99418563639324, lng: 30.382681353356723 };

   const map = new google.maps.Map(mapElement, {
      center: centerCoords,
      zoom: 10,
      styles: mapStyle
   });

   const marker = new google.maps.Marker({
      position: centerCoords,
      map: map,
      title: "My address",
      icon: {
         url: iconUrl,
         scaledSize: new google.maps.Size(iconSize.width, iconSize.height),
         origin: new google.maps.Point(0, 0),
         anchor: new google.maps.Point(iconSize.width / 2, iconSize.height) // якорь по центру внизу
      }
   });

   const infoWindowContent = document.getElementById('marker-info')?.innerHTML || 'No info available';
   const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      position: centerCoords,
      pixelOffset: new google.maps.Size(0, -10)
   });

   infoWindow.open(map, marker);

   document.addEventListener('click', function (event) {
      const closeButton = document.getElementById('marker-info-close');
      if (event.target === closeButton) {
         infoWindow.close();
      }
   });

   marker.addListener("click", function () {
      infoWindow.open(map, marker);
   });
}

function loadMaps() {
   if (document.getElementById('map')) initMap();
   if (document.getElementById('map2')) initMap2();
}

document.addEventListener('DOMContentLoaded', function () {
   setTimeout(function () {
      if (document.getElementById('map') || document.getElementById('map2')) {
         const script = document.createElement('script');
         script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA914JB360848OwtQu0vzggQZMOloEzmKU&libraries=marker&callback=loadMaps";
         script.async = true;
         script.defer = true;
         document.body.appendChild(script);
      }
   }, 300);
});
