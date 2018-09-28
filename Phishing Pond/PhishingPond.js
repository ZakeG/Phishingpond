$(document).ready(function() {
	$("#c00").append('<img src="Building1.png" height="40px" width="40px"></img>');
	var targetedCell;
	var cellDesc;
	var info;
	var curID;
	var activeState = false;
	var tempNum = 0;
	var infectedLevel = 0;
	var cellInfo = [	/*Name*/ /*Description*/ /*Security options*/ /*Answer options*/ 
					[["Bobs burgers"],["A small restaurant"],[1],["Fraud mail asking for credentials", "Malware mail disguised as business inquiry", "Spoofed link leading to a faked website", "Normal link leading to an infected website"]],
					[["Farmers Market"], ["A small company occupying the trading and farming markets of a city"], [1, 3],["Fraud mail asking for credentials", "Spam fraud mail", "Malware mail disguised as business inquiry", "Malware mail disguised as business inquiry"]],
					[["Caldian Storage"], ["A large storage company that owns 80% of the storage housing in their country."], [2],["Fraud mail asking for credentials", "Malware mail", "Spoofed link inserted into email leading to a dropbox", "Fraud mail"]],
					[["DSL shipping"], ["A large shipping company with an estimated net value of $200 mil dollars"], [2, 3],["hello", "it", "is", "me"]],
					[["Wutaphone"], ["A large telecom company with over 5 million active subscribers."], [1, 2, 3],["hello", "it", "is", "me"]],
					[["Kambrian stockmarket"], ["4% of Areopas networth is traded every year through this stockmarket."], [1, 3],["hello", "it", "is", "me"]],
					[["Etalian government"], ["A highly secure organisation overlooking the entirety of Etaly."], [2, 3, 4],["hello", "it", "is", "me"]],
					[["Bank of OSA"], ["9th largest bank in the world. They transfer and handle billions of various currencies every single minute."], [1, 2, 4],["hello", "it", "is", "me"]]
					
					];	
	var SecurityLevels = ["Spam mail filter", "Malware detection", "Spoofed link training", "Anti-spear phishing training"];
	var cellTest = [["c00"], ["c10"], ["c11"], ["c21", "c12"],["c13"]];	
	var cellImage=["Building1.png", "Building2.png", "Building3.png", "Building4.png", "Building5.png", "Building6.png", "Building7.png", "Building8.png", "Building9.png", "Building1.png", ]
	var currentCell = 0;
   	var correctAnswer;
   	var clicked;
	
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

	function assignData(){
		$("#table td").each(function() {
			var tempString = "";
			for(i = 0; i < cellTest.length; i++){
				for(j = 0; j < cellTest[i].length; j++){
					if($(this).attr('id') == cellTest[i][j]){
						console.log($(this).attr('id') + " = true");
						//$(this).html($(this).attr('id'));
						for(k = 0; k < cellInfo[tempNum][2].length; k++)				
							tempString += SecurityLevels[k] + "<br>";
						info = $(this)[ 0 ];
			        	jQuery.data( info, "test", {
			        	CompanyNumber: tempNum,
						Title: cellInfo[tempNum][0][0],
						Description: cellInfo[tempNum][1][0],
						SecInfo: tempString,
						Option1: cellInfo[tempNum][3][0],
						Option2: cellInfo[tempNum][3][1],
						Option3: cellInfo[tempNum][3][2],
						Option4: cellInfo[tempNum][3][3],
						});
						tempNum++;
					}
					else if($(this).attr('id') != "c00"){
						//$(this).css("visibility", "hidden");
					}
				}
			}
		});
	}

	assignData();

	function checkGrid(){
		$("#table td").each(function() {
			if(infectedLevel < cellTest.length){
			for(i = 0; i < cellTest[infectedLevel].length; i++){
				if($(this).attr('id') == cellTest[infectedLevel][i]) {
	        	$(this).css("visibility", "visible");
				}
			}
	        }
	  	});
	}

	function passedLevel(){
   		infectedLevel ++;
   		checkGrid();
   	}

	$("#table").on("click", "td", function() {

		//$(this).css("background-color", "#bcb223");
		shuffle($("#buttons"));
        info = $(this)[ 0 ];
        correctAnswer = cellInfo[jQuery.data(info, "test").CompanyNumber][2];
        $('#title').html(jQuery.data(info, "test").Title);
        $('#desc').html(jQuery.data(info,"test").Description);
        $('#secText').html(jQuery.data(info,"test").SecInfo);
        $('#link1').html(jQuery.data(info,"test").Option1);
        $('#link2').html(jQuery.data(info,"test").Option2);
        $('#link3').html(jQuery.data(info,"test").Option3);
        $('#link4').html(jQuery.data(info,"test").Option4);
        if(activeState == false){
        	TransitionOptions();
    		activeState = true;
    	}
		else if((targetedCell == $(this).attr('id') || targetedCell == undefined) && activeState == true){
			TransitionOptions();
     		activeState = false;
    	}
     	targetedCell = $(this).attr('id');
    });

    function shuffle(tbl) {
        var arr = tbl.find("td");
        for(
          var j, x, i = arr.length; i;
          j = parseInt(Math.random() * i),
          x = arr[--i], arr[i] = arr[j], arr[j] = x
        );
        var tmp;
        var rows = tbl.find("tr").length
        var cols = tbl.find("tr:first td").length
        for (i = 0; i < rows; i++){
            tmp = tbl.find("tr").eq(i);
            tmp.html()
            for (j = 0; j < cols; j++)
                tmp.append(arr[i*cols+j]);
        }       
  }

	$("#link1").on("click", function(){ 
		clicked = $(this).index(); 
	})
	$("#link2").on("click", function(){
		clicked = $(this).index();
	})
	$("#link3").on("click", function(){ 
		clicked = $(this).index();
	})
	$("#link4").on("click", function(){
		clicked = $(this).index();
	})

	$("#buttons td").on("click", function(){
	   	var arbitraryNumbers = [1, 2, 3, 4];
		var remove_Item = clicked;

		y = $.grep(arbitraryNumbers, function(value) {
 			return value != remove_Item;
		});
		console.log(clicked +"+"+ arbitraryNumbers)
		if(jQuery.inArray(clicked, arbitraryNumbers) != -1){
			passedLevel();
			arbitraryNumbers = [1, 2, 3, 4];
			$("#"+targetedCell).css("background-color", "red");
			$("#"+targetedCell).css("pointer-events", "none");
			TransitionOptions(); 
			activeState = false;
		}
	})
	$("#playBtn").on("click", function(){
		$("#menu").css("display","none");

	});

	$("#helpBtn").on("click", function(){
		$("#myModal").css("display", "block");

	});


	$(".close").on("click", function() {
	    $("#myModal").css("display","none");
	});

	window.onclick = function(event) {
	    if (event.target == $("#myModal")) {
			$("#myModal").css("display", "none");
	    }
	}

	var helpText = ["sdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjklsdfjkl", "asfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhioasfhio", "asrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhioasrhio", "ASJKRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR"];
	var helpIndex = 0;


	$("#nextButton").on("click", function(){
		helpIndex++;
		$("#helpText").text(helpText[helpIndex]);
		if(helpIndex != 0){
			$("#backButton").css("visibility", "visible");
		}
	});
	$("#backButton").on("click", function(){
		helpIndex--;
		$("#helpText").text(helpText[helpIndex]);
		if(helpIndex == 0){
			$("#backButton").css("visibility", "hidden");
		}
	});

});
