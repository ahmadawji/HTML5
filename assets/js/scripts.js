if (navigator.geolocation) {
  navigator.geolocation.watchPosition(function (pos) {
    var coords = new google.maps.LatLng(
        pos.coords.latitude,
        pos.coords.longitude
      ),
      opts = {
        zoom: 15,
        center: coords,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      },
      map = new google.maps.Map(document.querySelector("#map"), opts),
      marker = new google.maps.Marker({
        position: coords,
        map: map,
      });
  });
}
