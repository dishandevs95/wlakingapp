'use strict';
// Code for the Main page of the app.

// The following is sample code to demonstrate navigation.
// You need not use it for final app.

function viewPath(pathIndex) {
    // Save the selected path index to local storage so it can be accessed
    // from the Navigate page.
    localStorage.setItem(APP_PREFIX + "-selectedPath", pathIndex);
    // ... and then load the Navigate page.
    location.href = 'navigate.html';
}


$.ajax({
    url: "https://eng1003.monash/api/campusnav/?campus=ucl",
    dataType: "jsonp",
    jsonpCallback: "savePathsAndRenderNavigationList"
})

function savePathsAndRenderNavigationList(paths) {
    for (var i = 0; i < paths.length; i++) {
        var path = paths[i];
        var localPath = new Path(path.title, path.locations, path.prerecordedRoutesIndex,path.distance);
        availablePaths.push(localPath);
    }
	
    // defined in shared.js
    savePaths(paths);
    renderPathNavigationList(paths);
}

function renderPathNavigationList(paths) {
    var pathNavigationHtml = '';
    for (var i = 0; i < paths.length; i++) {
        pathNavigationHtml += ' <li class="mdl-list__item mdl-list__item--two-line" onclick="viewPath(' + i + ');">'
        + ' <span class="mdl-list__item-primary-content">'
        + '  <span>'+ paths[i].title +'</span> '
        + ' <span class="mdl-list__item-sub-title">Number of Turns: ' + paths[i].locations.length + '</span>'
		+ ' <span class="mdl-list__item-sub-title">Distance:  ' + paths[i].distance + '</span>'
        + '</span> '
        + '</li>';
    }
   $('#pathsList').html(pathNavigationHtml);
}

console.log(availablePaths)

