//Map initializer

function initialize() {

	var sidimLocation = new google.maps.LatLng(-34.787932, -58.3744585);

	//Map
  	var mapProp = {
    	center: sidimLocation,
    	zoom: 16,
    	mapTypeId: google.maps.MapTypeId.ROADMAP
	};

  	var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);


  	//Marker

  	var marker = new google.maps.Marker({
	  	position: sidimLocation
	});

	marker.setMap(map);

	var infowindow = new google.maps.InfoWindow({
		content: "SIDIM - Mitre"
	});

	infowindow.open(map, marker);

}

google.maps.event.addDomListener(window, 'load', initialize);