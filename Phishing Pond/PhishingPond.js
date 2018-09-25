$(document).ready(function() {

	var activeCell = false;
	var targetedCell;

	// items of the list
	var bird = {name:'Mockingbird'};
	var cat = {name:'Keyboard'};
	var dog = {name:'Fort'};
	var duck = {name:'Scrooge'};
	 
	// the linked-list itself
	var animals = {
	    head : bird
	};
	// each item of the list stores reference to the next one
	bird.next = cat;
	cat.next = dog;
	dog.next = duck;
	var animal = animals.head;
	while (animal) {
    alert(animal.name);
    animal = animal.next;
	}



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
		alert("w3n");

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
