var reg = new RegExp("url=([^&]+)");
// For each search term section (which has first child as the a href link)
for (i=0; i < document.getElementsByClassName("r").length; i++) {
	// The link is the first child href=
	x = document.getElementsByClassName("r")[i].firstChild.href;
	// If the regex match shows a google-encoded url
	if (x.match(reg) != null) {
		document.getElementsByClassName("r")[i].firstChild.href = decodeURIComponent(x.match(reg)[1]);
	}
}