$(document).ready(function() {

	var activeCell = false;
	var targetedCell;

	$("body").on("click", "body", function() {
		if(activeCell == true){
			document.getElementById("myDropdown").classList.toggle("show");
			//activeCell = false;
		}
	});

	$("td").each(function() {
		$(this).html($(this).attr('id'))//$(this).attr('id').toString();
  	});

	$("#table").on("click", "td", function() {
		if(activeCell == false){
     	document.getElementById("myDropdown").classList.toggle("show");
     	activeCell = true;
    } else {
    	document.getElementById("myDropdown").classList.toggle("show");
     	activeCell = false;
    }

	$("#link1").on("click", function(){ 
		alert("wan");

	})
	$("#link2").on("click", function(){ 
		alert("tu");

	})
	$("#link3").on("click", function(){ 
		alert("tree");

	})



     	 
   });
		$("body").mousemove(function( event ) {
			if(activeCell == false){
				$( "#myDropdown").css('left', event.pageX-1+'px');
			 	$( "#myDropdown").css('top', event.pageY+6+'px');
		}
	});
});
