var smiley = document.querySelector(".emoji");
var mouth = document.querySelector(".mouth");
var counter = 1;

if (/Mobi/.test(navigator.userAgent)) {
    smiley.onclick = function() {
    	console.log("click");
    	console.log(counter);
    	counter++;
    	if (isEven(counter)) {
    		return happyState();
    	}
    	return unhappyState();
    }
} else {
	smiley.onmouseenter = function() {
		happyState();
		// normalState();
		// setTimeout(function(){ happyState(); }, 3000);
	}
	smiley.onmouseleave = function() {
		unhappyState();
	}
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

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}
// function normalState() {
// 	classie.remove(smiley, "emoji1");
// 	classie.remove(smiley, "emoji2");
// 	classie.add(smiley, "normal");

// 	classie.remove(mouth, "mouth");
// 	// classie.add(mouth, "normal-mouth");

// }