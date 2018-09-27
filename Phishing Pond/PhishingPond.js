$(document).ready(function() {

	var top = $("buttonHolder").css('margin-top');

	function TransitionOptions() {
		if($("#buttonHolder").css("margin-top") == "0px"){
			$("#buttonHolder").css("margin-top", "-125px");
			$("#buttonHolder td").css("color", "#F1F1F1");
		}
		else if($("#buttonHolder").css("margin-top") == "-125px"){
			$("#buttonHolder").css("margin-top", "0px");
			$("#buttonHolder td").css("color", "black");
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

	var cellInfo = [	/*Name*/ /*Description*/ /*Security options*/ /*Answer options*/ 
					[["Company 1"],["a small company"],[1, 2],["hello", "it", "is", "me"]],
					[["Company 2"], ["a medium company"], [1, 2],["hello", "it", "is", "me"]],
					[["Company 3"], ["a big company"], [1, 2],["hello", "it", "is", "me"]],
					[["Company 4"], ["an even bigger company"], [1, 2],["hello", "it", "is", "me"]],
					[["Company 5"], ["a massive company"], [1, 2],["hello", "it", "is", "me"]],
					[["Company 6"], ["a humongous company"], [1, 2],["hello", "it", "is", "me"]],
					[["Company 7"], ["an absolutely ridiculously big company"], [1, 2],["hello", "it", "is", "me"]],
					[["Company 8"], ["a company"], [1, 2],["hello", "it", "is", "me"]]
					];	
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
			var tempString = "";
			if($(this).attr('id') != "c00") $(this).css('visibility', 'hidden');
			$(this).html($(this).attr('id'))//$(this).attr('id').toString();
			for(i = 0; i < cellInfo[parseInt($(this).index())][2].length; i++)				
				tempString += cellInfo[parseInt($(this).index())][2][i] + "<br>";
        	info = $(this)[ 0 ];
        	jQuery.data( info, "test", {
			Title: cellInfo[parseInt($(this).index())][0][0],
			Description: cellInfo[parseInt($(this).index())][1][0],
			SecInfo: tempString,
			Option1: cellInfo[parseInt($(this).index())][3][0],
			Option2: cellInfo[parseInt($(this).index())][3][1],
			Option3: cellInfo[parseInt($(this).index())][3][2],
			Option4: cellInfo[parseInt($(this).index())][3][3],
			//Answer: cellInfo[parseInt($(this).index())][4][0]
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
        $('#link1').html(jQuery.data(info,"test").Option1);
        $('#link2').html(jQuery.data(info,"test").Option2);
        $('#link3').html(jQuery.data(info,"test").Option3);
        $('#link4').html(jQuery.data(info,"test").Option4);
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
		if($(this).text != cellInfo[parseInt($(this).index())][3][0])
		passedLevel();
	})
	$("#link2").on("click", function(){

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
