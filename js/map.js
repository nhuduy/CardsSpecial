function myMap() {
  var myCenter = new google.maps.LatLng(10.034023, 105.779841);
  var mapCanvas = document.getElementById("map");
  var mapOptions = {center: myCenter, zoom: 14};
  var map = new google.maps.Map(mapCanvas, mapOptions);
  var marker = new google.maps.Marker({position:myCenter});
  marker.setMap(map);

  var contentString = '<div class="info-window">' +
              '<h3>Red Cards Limit</h3>' +
              '<div class="info-content">' +
              '<p>Red Cards Limited is into selling cards for various occasions. We have a huge collection of cards. .</p>' +
              '<p>Address: 1, Ly Tu Trong, Ninh Kieu district, Can Tho city, Vietnam.</p>' +
              '<p>Phone: +84.817.568.381</p>' +
              '</div>' +
              '</div>';
  var infowindow = new google.maps.InfoWindow({
                      content: contentString,
                      maxWidth: 400
                  });

                  marker.addListener('click', function () {
                      infowindow.open(map, marker);
                  });
}