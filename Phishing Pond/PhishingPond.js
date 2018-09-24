$(document).ready(function() {

	var activeCell = false;
	var targetedCell;
	var cellDesc;
	var info;

	var cellInfo = [["Company 1", "a small company", "training 1 <br> training 2"],
					["Company 2", "a medium company", "training 3 <br> training 4"],
					["Company 3", "a big company", "training 5 <br> training 6"],
					["Company 4", "an even bigger company", "training 7 <br> training 8"],
					["Company 5", "a massive company", "training 9 <br> training 10"],
					["Company 6", "a humongous company", "training 11 <br> training 12"],
					["Company 7", "an absolutely ridiculously big company", "training 13 <br> training 14"],
					["Company 8", "a company", "training 15 <br> training 16"]];


	$("#table td").click(function() {     
 
        var column_num = parseInt( $(this).index());
	    var row_num = parseInt( $(this).parent().index());
        targetedCell = $(this).attr('id');
        info = $(this)[ 0 ];
        $('#title').html(jQuery.data(info, "test").Title);
        $('#desc').html(jQuery.data(info,"test").Description);
        $('#secText').html(jQuery.data(info,"test").SecInfo);
       	//alert( "Row_num =" + row_num + "  ,  Rolumn_num ="+ column_num );   
    });

	/*
    $('#table td').mouseleave(function(){
    	if(activeCell == true)
    	document.getElementById("myDropdown").classList.toggle("show");
    	activecell = false;
    });
    */

	$("#table td").each(function() {
		$(this).html($(this).attr('id'))//$(this).attr('id').toString();
        info = $(this)[ 0 ];
        jQuery.data( info, "test", {
			Title: cellInfo[parseInt($(this).index())][0],
			Description: cellInfo[parseInt($(this).index())][1],
			SecInfo: cellInfo[parseInt($(this).index())][2]
		}); 
  	});

	$("#table").on("click", "td", function() {
		if(activeCell == false){
     	document.getElementById("myDropdown").classList.toggle("show");
     	activeCell = true;
    }else {
    	document.getElementById("myDropdown").classList.toggle("show");
     	activeCell = false;
    }

	$("#link1").on("click", function(){
		if(jQuery.data(info,"test").secInfo.search("training 1") != -1)
			alert("resisted");
		else{
			alert("infected");
		}
	})
	$("#link2").on("click", function(){ 
		if(jQuery.data(info,"test").secInfo.search("training 2") != -1)
			alert("resisted")
		else{
			alert("infected")
		}
	})
	$("#link3").on("click", function(){ 
		if(jQuery.data(info,"test").secInfo.search("training 3") != -1)
			alert("resisted")
		else{
			alert("infected")
		}

	})
     	 
   });
		$("body").mousemove(function( event ) {
			if(activeCell == false){
				$( "#myDropdown").css('left', event.pageX-1+'px');
			 	$( "#myDropdown").css('top', event.pageY+6+'px');
		}
	});
});
