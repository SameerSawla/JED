define([],function(){

	var getJSON = function(selectedLanguage){

		var jsonObject = null;
		var filePath = 'scripts/modules/' + selectedLanguage + '.json';
		var xobj = new XMLHttpRequest();


		xobj.overrideMimeType("application/json");
		xobj.open('GET',filePath,false); // Ideally should be used as true

		xobj.onreadystatechange = function() {
			if(xobj.readyState == 4 && xobj.status=="200")
			{
				
				jsonObject  = JSON.parse(xobj.responseText);
			} 
		};

		xobj.send(null);

		return jsonObject;
	};

	return {

		getJSON : getJSON
		
	};

});