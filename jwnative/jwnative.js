// Open JWPlayer video source in the browser's native player.
// Allows you to watch videos without that pesky flash player.

var vSrc = jwplayer().getPlaylist()[0].file

// Remove elements.
document.head.parentNode.removeChild(document.head);
document.body.parentNode.removeChild(document.body);

var toHTML = '\
<body style="text-align: center; background-color: #080808;">\
	<video controls height="97%" preload="auto">\
		<source src="' + vSrc + '">\
	</video>\
</body>\
'

document.querySelector("html").innerHTML = toHTML;
