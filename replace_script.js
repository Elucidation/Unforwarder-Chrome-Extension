// Script run on a google search result page, replacing all google-forwarded result links with original links in place.
// Example starting google-forwarded url :
//              http://www.google.com/url?sa=t&rct=j&q=fear%20not%20the%20valient&source=web&cd=1&ved=0CCAQFjAA&url=http%3A%2F%2Fen.wikiquote.org%2Fwiki%2FCourage&ei=QiiyTu2QGZHAtgfB762cAg&usg=AFQjCNHOaIV8vNJ1fxGxdNmYkl3v9jpumw&sig2=IbeYKkY9u-lfRGUA38gRtw
// Fixed ending url: 
//              http://en.wikiquote.org/wiki/Courage
// Author : Sameer Ansari

// Regex for getting original url out of a google-forwarded url
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