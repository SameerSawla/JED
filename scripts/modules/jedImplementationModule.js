define(['scripts/modules/getLanguageData.js','scripts/jed.js'],function(languageData){

	var jedReady;

	require(['scripts/jed.js'], function(){

		jedReady = true;

	});

	var selectElement = document.getElementById("selectLanguage");
	var renderingArea = document.getElementById("rendering-area");
	var selectedContext = document.getElementById("selectContext");
	var selectedLanguage = selectElement.value;
	var i18n;

	var updateLanguage = function(){

		// if(!jedReady)alert('sorry, still loading loading language libraries.');

		var data = JSON.parse(JSON.stringify(languageData.getData(selectElement.value)));
		console.log(data);
		i18n = new Jed(data);

		
		if(selectedContext.value!="uni")
		{
	    	renderingArea.innerHTML = i18n.translate( "Development" ).onDomain(selectedLanguage).withContext(selectedContext.value).fetch();
		}
		else
		{
		   	 renderingArea.innerHTML = i18n.translate( "Development" ).onDomain(selectedLanguage).fetch();			
		}	

	};	

	selectElement.onchange = updateLanguage;


	var updateContext = function(){

		if(selectedContext.value!="uni")
		{
	    	renderingArea.innerHTML = i18n.translate( "Development" ).onDomain(selectedLanguage).withContext(selectedContext.value).fetch();
		}
		else
		{
		   	 renderingArea.innerHTML = i18n.translate( "Development" ).onDomain(selectedLanguage).fetch();			
		}
	}

	selectedContext.onchange = updateContext;


	var populateDefaultLanguage = function(){
				
		var language = window.navigator.userLanguage || window.navigator.language;
		var tot = selectElement.length;

		for(var i=0;i<tot;i++)
		{
			if(selectElement[i].value === language)
			{
				selectElement.selectedIndex = i;
				break;
			}
		}

		updateLanguage();

	};

	return {
		
		populateDefLang : populateDefaultLanguage
	};
});