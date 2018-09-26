$(document).ready(function() {

	var top = $("buttonHolder").css('margin-top');

	function TransitionOptions() {
		if($("#buttonHolder").css("margin-top") == "0px"){
			$("#buttonHolder").css("margin-top", "-125px");
		}
		else if($("#buttonHolder").css("margin-top") == "-125px"){
			$("#buttonHolder").css("margin-top", "0px");
		}
	}
   	//document.getElementById("buttonHolder").classList.toggle("show");
   	function hideyhide(){
   		$("#c03").css("visibility", "hidden");	
   	}
   	function showyshow(){
   		$("#c03").css("visibility", "visible");
   	}


	var targetedCell;
	var cellDesc;
	var info;
	var curID;
	var activeState = false;

	var infectedLevel = 0;

	var cellInfo = [["Company 1", "a small company", "1, 2",],
					["Company 2", "a medium company", "training 3 <br> training 4"],
					["Company 3", "a big company", "training 5 <br> training 6"],
					["Company 4", "an even bigger company", "training 7 <br> training 8"],
					["Company 5", "a massive company", "training 9 <br> training 10"],
					["Company 6", "a humongous company", "training 11 <br> training 12"],
					["Company 7", "an absolutely ridiculously big company", "training 13 <br> training 14"],
					["Company 8", "a company", "training 15 <br> training 16"]];	
	var SecurityLevels = [""]

	var cellTest = [["c00"], ["c10"], ["c11"], ["c21", "c12"],["c13", "c03", "c31"]];	


/*
	$("#table td").click(function() {     

       	//alert( "Row_num =" + row_num + "  ,  Rolumn_num ="+ column_num );   
    });
    */
	/*	
    $('#table td').mouseleave(function(){
    	if(activeCell == true){
    		document.getElementById("myDropdown").classList.toggle("show");
    		activeCell = false;
    	}
    });
	*/

	function assignData(){
		$("#table td").each(function() {
			if($(this).attr('id') != "c00") $(this).css('visibility', 'hidden');
			$(this).html($(this).attr('id'))//$(this).attr('id').toString();
	        	info = $(this)[ 0 ];
	        	jQuery.data( info, "test", {
				Title: cellInfo[parseInt($(this).index())][0],
				Description: cellInfo[parseInt($(this).index())][1],
				SecInfo: cellInfo[parseInt($(this).index())][2]
			}); 
        });
	}

	assignData();

	function checkGrid(){
		$("#table td").each(function() {
			for(i = 0; i < cellTest[infectedLevel].length; i++){
				if($(this).attr('id') == cellTest[infectedLevel][i]) {
	        	$(this).css("visibility", "visible");
				}
	        }
	  	});
	}

	function passedLevel(){
   		infectedLevel ++;
   		checkGrid();
   	}

	$("#table").on("click", "td", function() {
        info = $(this)[ 0 ];
        $('#title').html(jQuery.data(info, "test").Title);
        $('#desc').html(jQuery.data(info,"test").Description);
        $('#secText').html(jQuery.data(info,"test").SecInfo);
        if(activeState == false){
        	TransitionOptions();
    		//document.getElementById("buttonHolder").classList.toggle("show");
    		activeState = true;
    	}
		else if((targetedCell == $(this).attr('id') || targetedCell == undefined) && activeState == true){
			TransitionOptions()
     		//document.getElementById("buttonHolder").classList.toggle("show");
     		activeState = false;
    	}
     	targetedCell = $(this).attr('id');
    });

	$("#link1").on("click", function(){
		passedLevel();
	})
	$("#link2").on("click", function(){ 
		showyshow();
	})
	$("#link3").on("click", function(){ 
		if(jQuery.data(info,"test").secInfo.search("training 3") != -1)
			alert("resisted")
		else{
			alert("infected")
		}

	})
     	 
 	/*
		$("body").mousemove(function( event ) {
			if(activeCell == false){
				$( "#myDropdown").css('left', event.pageX-1+'px');
			 	$( "#myDropdown").css('top', event.pageY+6+'px');
		}
	});
	*/
});
