

(function() {

	var x =  document.querySelectorAll('div.player:not(.me)');

	for (var y=0; y<x.length; y++)
	{
		x[y].style.visibility="hidden";
	}

	alert('I dont feel so good Mr. Stark');

})();