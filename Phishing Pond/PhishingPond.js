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
					[["Bobs burgers"],["A small restaurant"],[1],
					["Dear Sir/Madam, I believe this report meet you in a very good present state of mind and health. I am Mark George a United Kingdom Attorney. A deceased client of mine, that shares same last name with you, died as a result of a heart-related condition on March 12th 2007. His heart condition leading to his death was due to death of all members of his Family in tsunami disaster in Sumatra, Indonesia. ttp://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake. I have been unsuccessful in locating the relatives for over last 9 years now so i decided to trace his last name to locate any member of his family.Since his death I have made several inquiries to embassy to locate any of my clients extended relatives this has also proved unsuccessful .Hence I contacted you to seek your consent in presenting you as the next of kin to the deceased since you have the same last same so that the proceeds of this deposit valued sum can be handed over to you. Your earliest response to this mail will be highly appreciated.Do get back to me as i will not contact anybody till i read from you and if you are not interested do let me know by replying back to me. You can Reach me on(barristermrmarkgeorge@gmail.com) for more information as my late client left Behind a deposit of £ 11,800,000,00 GBP (Eleven million Eight hundred thousand Pounds) Best Regards."
					, "https://www.downloadmoreram.cz"
					, "http:www.EBAY.io/login"
					, "Malware.bin"]],
					[["Farmers Market"], ["A small company occupying the trading and farming markets of a city"], [1, 3],
					["Hello this is logan from your security team. We have a security compromise and need to change your account details immediately. Please respond with your current credentials and requested updated ones."
					, "Hello! How is your day. My name is Troy and I am interested in a position. I have attached a copy of my resumé. The password is 1234. Have a nice day!"
					, "http://www.mybank.com.scamsite.com"
					, "Hello this is Jerry from Slaughterers market. We'd like to recruit you for our business instead. If you are interested please see the attached pdf for more information."]],
					[["Caldian Storage"], ["A large storage company that owns 80% of the storage housing in their country."], [2],
					["Hello this is Jeff from Security I talked to Alison the other day and she told me to contact you about setting up your new transactions account. Is the credentials the same as the old one?"
					, "Hello this is Jim representing savefunds. We sent you a shipment order earlier by mail. It must have been lost somewhere but I have embedded it in this mail so you can have a look."
					, "Hello this is Harry working at Oreaos we are interested in a partnership deal. Please read more at www.Iinkedin.com/x/page "
					, "Dear Sir: I have been requested by the Gerian National Petroleum Company to contact you for assistance in resolving a matter. we has recently concluded a large number of contracts for oil exploration. The contracts have produced moneys equaling US$40000000. however because of certain regulations of the gerian Government it is unable to move these funds to another region. You assistance is requested to assist the Nigerian National Petroleum Company. in moving these funds out of Geri. If the funds can be transferred to your name. in your account. then you can forward the funds as directed by the Gerian National Petroleum Company. However to be a transferee of these money you must be a depositor of at least U100000 in a Gerian bank. If it will be possible for you to assist us we would be grateful. Please deposit at XXX-XXXX-XXX Yours truly Prince Alyusi Islassis"]],
					[["DSL shipping"], ["A large shipping company with an estimated net value of $200 mil dollars"], [2, 3],
					["Dear Lehigh mail Users, The password associated with this account will expire shortly. To confinue using this account without any changes, click on the ''Keep my mail account'' button: KEEP MY MAIL ACCOUNT "
					, "Hello please see www.Myspace.cz/addfriend"
					, "http://www.cutedogvideos.lk"
					, "You won a cruise! click HERE for details."]],
					[["Wutaphone"], ["A large telecom company with over 5 million active subscribers."], [1, 2, 3],
					["Hello we have checked your business Please visit: www.businesscheks.com/login"
					, " Hello we would like to partner please visit: http://orange.mytelephone.io/partnership"
					, "Wilson has shared a document ''signed wire payment receipt.pdf'' on Dropbox with you. (View document) press this button to view."
					, "Hi James I need  you to make a payment for our new project in berlin immediately. No need to reply. This is the company that are debiting us: XXX-XXX-XXX"]],
					[["Kambrian stockmarket"], ["4% of Areopas networth is traded every year through this stockmarket."], [1, 3],
					["http://www.mybank.com.scamsite.com", "Hello this is Thomas from your IT department. Alison noticed a security breach and need to change your password immediately. Please reply with your account details so we can change it in our database"
					, "Dear Sir: I have been requested by the Gerian National Petroleum Company to contact you for assistance in resolving a matter. we has recently concluded a large number of contracts for oil exploration. The contracts have produced moneys equaling US$40000000. however because of certain regulations of the gerian Government it is unable to move these funds to another region. You assistance is requested to assist the Nigerian National Petroleum Company. in moving these funds out of Geri. If the funds can be transferred to your name. in your account. then you can forward the funds as directed by the Gerian National Petroleum Company. However to be a transferee of these money you must be a depositor of at least U100000 in a Gerian bank. If it will be possible for you to assist us we would be grateful. Please deposit at XXX-XXXX-XXX Yours truly Prince Alyusi Islassis", "From:CEO TO:Tim, Hello tim I will need you to process an urgent payment, which needs to go out today as a same value day payment. Let me know when you are set to proceed, so I can have the account information forwarded to you once received."]],
					[["Etalian people"], ["A highly secure organisation overlooking the entirety of Etaly."], [2, 3, 4],
					["Dear Sir: I have been requested by the Gerian National Petroleum Company to contact you for assistance in resolving a matter. we has recently concluded a large number of contracts for oil exploration. The contracts have produced moneys equaling US$40000000. however because of certain regulations of the gerian Government it is unable to move these funds to another region. You assistance is requested to assist the Nigerian National Petroleum Company. in moving these funds out of Geri. If the funds can be transferred to your name. in your account. then you can forward the funds as directed by the Gerian National Petroleum Company. However to be a transferee of these money you must be a depositor of at least U100000 in a Gerian bank. If it will be possible for you to assist us we would be grateful. Please deposit at XXX-XXXX-XXX Yours truly Prince Alyusi Islassis", "Hello this is Harry working at Oreaos we are interested in a partnership deal. Please read more at www.Iinkedin.com/x/page ", "Hello this is X from your IT department. We have noticed a security breach and need to change your password immediately. Please reply with your account details so we can change it in our database.", "Hello we have checked your business Please visit: www.businesscheks.com/login"]],
					[["Bank of OSA"], ["9th largest bank in the world. They transfer and handle billions of various currencies every single minute."], [1, 2, 4],
					["hello", "it", "is", "me"]]
					];	

	var SecurityLevels = ["Spam mail filter", "Malware detection", "Spoofed link training", "Anti-spear phishing training"];
	var cellTest = [["c00"], ["c10"], ["c11"], ["c21", "c12"],["c13"]];	
	/*var cellImage=["Building1.png", "Building2.png", "Building3.png", "Building4.png", "Building5.png", "Building6.png", "Building7.png", "Building8.png", "Building9.png", "Building1.png", ]*/
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
							tempString += SecurityLevels[cellInfo[tempNum][2][k] + "<br>";
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
						$(this).css("visibility", "hidden");
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

	$("#restart").on("click", function(){
		infectedLevel = 0;
		$("#table td").each(function() {
			if($(this).attr('id') != "c00"){
				$(this).css("visibility", "hidden");
			}
			$(this).css("background-color", "#F1F1F1");
			$(this).css("pointer-events", "auto");
	  	});
		$("#winScreen").css("visibility", "hidden");
		
		
	});
	
	/*$("#restart").on("click", function(){
		infectedLevel = 1;
		$("#table td").each(function() {
			if(infectedLevel < cellTest.length){
			for(i = 0; i < cellTest[infectedLevel].length; i++){
				if($(this).attr('id') <= cellTest[infectedLevel][i]) {
	        	$(this).css("visibility", "hidden");
				
				}
			}
	        }
	  	});
		$("#winScreen").css("visibility", "hidden");
		
		
	});*/
	
	function passedLevel(){
   		infectedLevel ++;
		if (infectedLevel == 6){
			$("#winScreen").css("visibility", "visible");
		}
		console.log(infectedLevel);
   		checkGrid();
   	}

	$("#table").on("click", "td", function() {
		$(this).css("background-color", "#bcb223");
        info = $(this)[ 0 ];
        wrongAnswer = cellInfo[jQuery.data(info, "test").CompanyNumber][2];
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
     	shuffle($("#buttons"));
     	$("#buttons td").css("pointer-events", "auto");
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
		clicked = $(this).attr('class'); 
	})
	$("#link2").on("click", function(){
		clicked = $(this).attr('class');
	})
	$("#link3").on("click", function(){ 
		clicked = $(this).attr('class');
	})
	$("#link4").on("click", function(){
		clicked = $(this).attr('class');
	})

	$("#buttons td").on("click", function(){
	   	var arbitraryNumbers = [1, 2, 3, 4];
	   	var remove_Item;

		for(i = 0; i < wrongAnswer.length; i++){
			arbitraryNumbers = $.grep(arbitraryNumbers, function(value) {
			remove_Item = wrongAnswer[i];
			console.log("Removed: " + remove_Item);
 			return value != remove_Item;
		});
		}

		console.log("Clicked: " + clicked +" Array: "+ arbitraryNumbers)
		if(jQuery.inArray(parseInt(clicked), arbitraryNumbers) != -1){
			passedLevel();
			$("#"+targetedCell).css("background-color", "red");
			$("#"+targetedCell).css("pointer-events", "none");
			TransitionOptions(); 
			activeState = false;
			$("#buttons td").css("pointer-events", "none");
		}
		arbitraryNumbers = [1, 2, 3, 4];
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

	/*window.onclick = function(event) {
	    if (event.target == $("#myModal")) {
			$("#myModal").css("display", "none");
	    }
	}*/

	var helpText = ["Email/Spam Using the most common phishing technique. The same email is sent to millions of users with a request to fill in personal details. These details will be used by the phishers for their illegal activities. Most of the messages have an urgent note which requires the user to enter credentials to update account information, change details, or verify accounts. Sometimes, they may be asked to fill out a form to access a new service through a link which is provided in the email. Counter: Employees will not give personal information as a response to seemingly urgent mail.", "Link Manipulation Link manipulation is the technique in which the phisher sends a link to a malicious website. When the user clicks on the deceptive link it opens up the phisher’s website instead of the website mentioned in the link. Hovering the mouse over the link to view the actual address stops users from falling for link manipulation. Counter: Employees stay vigilant and doesn’t click links which may be spoofed.", "Malware Phishing scams involving malware require it to be run on the user’s computer. The malware is usually attached to the email sent to the user by the phishers. Once you click on the link, the malware will start functioning. Sometimes the malware may also be attached to downloadable files.Counter: Strong antivirus.", 
	"Website Phishing Scams. It is never a good idea to blindly trust a website. Assuming that a site is legitimate can cause you to fall prey to phishing attacks. If that happens you could inadvertently disclose sensitive information to people who may use it for identify theft and other malicious things."];
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
