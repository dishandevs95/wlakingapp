'use strict';
// Shared code needed by all pages of the app.

// Prefix to use for Local Storage.  You may change this.
var APP_PREFIX = "monash.eng1003.navigationApp";

// Array of saved Path objects.
var availablePaths = [];

class Path {
	constructor(title, locations, prerecordedRoutesIndex,distance) {
		this.title = title
		this.locations = locations;
		this.prerecordedRoutesIndex = prerecordedRoutesIndex;
		//this.distance=addDistance();
			
		
		
		
	/*	
		function addDistance(){
			var total=10;
			
			for (var i=0;i<locations.length-1;i++){
				var pos1=new google.maps.LatLng(locations[i].lat(),locations[i].lng());
				var pos2=new google.maps.LatLng(locations[i+1].lat(),locations[i].lng());
				total += google.maps.geometry.spherical.computeDistanceBetween(pos1,pos2);
			}
			
			return total;
}
	*/		
			
			
		}
	}


function savePaths(paths) {
	localStorage.setItem("paths",  JSON.stringify(paths));
}

function getPath(index) {
	var paths = JSON.parse(localStorage.getItem("paths"));
	return paths[index];
}

function getPaths() {
	return JSON.parse(localStorage.getItem("paths"));
} 



