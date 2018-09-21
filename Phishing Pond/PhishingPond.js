$(document).ready(function() {

	var targetedCell = false;

	$("body").on("click", "body", function() {
		if(targetedCell == true){
			document.getElementById("myDropdown").classList.toggle("show");
			//targetedCell = false;
		}
	});

	$("#table").on("click", "td", function() {
		if(targetedCell == false){
     	document.getElementById("myDropdown").classList.toggle("show");
     	targetedCell = true;
     } else {
     	document.getElementById("myDropdown").classList.toggle("show");
     	targetedCell = false;
     }
     	 
   });
		$("body").mousemove(function( event ) {
			if(targetedCell == false){
				$( "#myDropdown").css('left', event.pageX-10+'px');
			 	$( "#myDropdown").css('top', event.pageY-10+'px');
		}
	});
});
