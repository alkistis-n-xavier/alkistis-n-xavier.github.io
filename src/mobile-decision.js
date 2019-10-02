var mobileRe = "/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/";

var siteHome = "alkistis-n-xavier.github.io/"
var locParts = document.location.href.split(siteHome);
var loc = locParts[locParts.length - 1].split("?")[0];

var desktopSites = {
	'save-the-date.html' : 'index.html'
}

var mobileSites = {
	'' : 'save-the-date.html',
	'index.html' : 'save-the-date.html'
}

if (navigator.userAgent.match(mobileRe)) {
	if (desktopSites.hasOwnProperty(loc)) document.location = desktopSites[loc];
} else{
	if (mobileSites.hasOwnProperty(loc)) document.location = mobileSites[loc];
}


