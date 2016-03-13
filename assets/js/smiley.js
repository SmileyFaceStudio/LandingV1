var smiley = document.querySelector(".emoji1");
var mouth = document.querySelector(".mouth");

smiley.onmouseover = function() {
	happyState();
	// normalState();
	// setTimeout(function(){ happyState(); }, 3000);
	
}
smiley.onmouseout = function() {
	unhappyState();
}

function happyState () {
	// classie.remove(mouth, "mouth");
	// classie.add(mouth, "smile");

	classie.remove(smiley, "emoji1");
	classie.add(smiley, "happy");
}
function unhappyState () {
	classie.remove(smiley, "happy");
	classie.add(smiley, "emoji1");
}

// function normalState() {
// 	classie.remove(smiley, "emoji1");
// 	classie.remove(smiley, "emoji2");
// 	classie.add(smiley, "normal");

// 	classie.remove(mouth, "mouth");
// 	// classie.add(mouth, "normal-mouth");

// }