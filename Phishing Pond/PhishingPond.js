$(document).ready(function() {

	var getMenuPos = true;

	$("#table").on("click", "td", function() {
     	document.getElementById("myDropdown").classList.toggle("show");
     	getMenuPos = false;
     	 
   });
		if(getMenuPos == true){
		$("body").mousemove(function( event ) {
			$( "#myDropdown").css('left', event.pageX+'px');
		 	$( "#myDropdown").css('top', event.pageY+'px');
		 	getMenuPos = false;
		});
	}
});
