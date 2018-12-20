

(function() {

	var x =  document.querySelectorAll('div.player:not(.me)');

	for (var y=0; y<x.length; y++)
	{
		x[y].style.visibility="hidden";
	}

	alert(' Mr. Stark I dont feel so good.');

})();
