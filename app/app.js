function initMap() {
    var uluru = {lat: 56.038833, lng:12.711021};
    var map = new google.maps.Map(document.getElementById('maps'), {
      zoom: 10,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }