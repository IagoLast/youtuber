function clickHandler(e) { 
	var link = document.querySelector('#link').value
	link = link.replace('?','/');
	link = link.replace('=','/');
	link = link.replace('watch/','');
	window.open(link,'_newtab');
}

function main() {
  // Initialization work goes here.
}
function callback(li){	
    
}

// Add event listeners once the DOM has fully loaded by listening for the
// `DOMContentLoaded` event on the document, and adding your listeners to
// specific elements when it triggers.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
  main();
});
