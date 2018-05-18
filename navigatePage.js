'use strict';
// Code for the Navigate page.

// The following is sample code to demonstrate navigation between pages of the
// app.  You need can replace this in your final app.

var pathIndex = localStorage.getItem(APP_PREFIX + "-selectedPath");
if (pathIndex !== null)
{
    // If a path index was specified, show name in header bar title. This
    // is just to demonstrate navigation.  You should set the page header bar
    // title to an appropriate description of the path being navigated
    var pathNames = [ "Path A", "Path B" ];
    var path = getPath(pathIndex);
    document.getElementById("headerBarTitle").textContent = path.title;
}


//Part where map is innitialized 
//changing zoom value helps to get a better view



/*function initMap(){
	map=new google.maps.Map(document.getElementById('map'),{center:{lat:6.9060541, lng:79.9044739},zoom:20});
}*/



//tryout getting location through googles own geolocation
//$ curl -d @your_filename.json -H "Content-Type: application/json" -i "https://www.googleapis.com/geolocation/v1/geolocate?key=YOUR_API_KEY"



//the HTML5 geolocation method

navigator.geolocation.watchPosition(success,error,[options]);

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 10
};

function success(pos) {
  var crd = pos.coords;
	var map;
	
	var lati = crd.latitude
	var longi = crd.longitude
	map =new google.maps.Map(document.getElementById('map'),{center:{lat:lati, lng:longi},zoom:20});
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
	
	// adding new marker for user location
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(lati, longi),
    icon: 'images/userLocation.png',
    map: map
  });
	
	
	// adding an info window to the map
var infowindow;
infowindow=new google.maps.InfoWindow;

var infoWindowPosition={
 lat:crd.latitude,
 lng:crd.longitude
}

infowindow.open(map);
infowindow.setPosition(infoWindowPosition);
infowindow.setContent('Your Location <br> Accuracy :'+crd.accuracy+'m');

	

}


function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 6.9054088, lng: 79.9050835},
          zoom: 8
        });
}


// checking permissions
Notification.requestPermission(function(result) {  
  if (result === 'denied') {  
    console.log('Permission wasn\'t granted. Allow a retry.');  
    return;  
  } else if (result === 'default') {  
    console.log('The permission request was dismissed.');  
    return;  
  }

  // if permission allowed, getting user's current location
  navigator.geolocation.getCurrentPosition(function(position) {  
    console.log('Geolocation permissions granted');  
    console.log('Latitude:' + position.coords.latitude);  
    console.log('Longitude:' + position.coords.longitude);  

    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
      icon: 'images/userLocation.png',
      map: map
    });
  });  
  console.log('Permission was granted for notifications');  
});

