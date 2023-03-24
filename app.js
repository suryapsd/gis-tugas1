var lat = -8.519690764779996;
var lng = 115.12325785399827;
var map = L.map("map").setView([lat, lng], 12);
var markerIcon = L.icon({
  iconUrl: "marker.png",
  iconSize: [30, 30], // size of the icon
  popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; GIS",
}).addTo(map);

var marker = L.marker([lat, lng], {
  icon: markerIcon,
})
  .bindPopup(
    "<div>You clicked the map at</div><div class='mt-2'>Lat: " +
      lat +
      "</div><div>Long: " +
      lng +
      "</div>"
  )
  .openPopup()
  .addTo(map);

let markers = [];

function onMapClick(e) {
  L.marker(e.latlng, {
    icon: markerIcon,
  })
    .bindPopup(
      "<div>You clicked the map at</div><div class='mt-2'>Lat: " +
        e.latlng.lat +
        "</div><div>Long: " +
        e.latlng.lng +
        "</div>"
    )
    .addTo(map)
    .openPopup();
  markers.push({ lat: e.latlng.lat, long: e.latlng.lng });
  console.log(markers);
}

map.on("click", onMapClick);
