document.addEventListener('DOMContentLoaded', function(){
 const images=["1.jpg","2.jpg","3.jpg","5.jpg","5.jpg","6.jpg","7.jpg","8.jpg"];
 const image = images[Math.floor(Math.random()*images.length)];
 document.getElementById("image").setAttribute(
 	"src",
 	`./images/${image}`
 	);

var focusInput = document.getElementById("focus")
chrome.storage.sync.get(['focus'], function(result) { 
	if(result.focus){
		focusInput.value = result.focus
	}
});

focusInput.addEventListener('keypress', function(e){
	chrome.storage.sync.set({focus: e.target.value});
});

}, false);