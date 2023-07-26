body {
    background-color: #f5f5f5;
    padding: 20px;
  }
  
  .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
  }

  function initMap() {
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(40.7128, -74.0060),  // New York coordinates
      mapTypeId: 'roadmap'
    };
  
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  }
  
  