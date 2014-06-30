define(['scripts/modules/getJSONData.js','scripts/jed.js'],function(getJSONData,$){

	var selectElement = document.getElementById("selectLanguage");
	var renderingArea = document.getElementById("rendering-area");

	var updateLanguage = function(){

		var languageData = JSON.parse(JSON.stringify(getJSONData.getJSON(selectElement.value)));
		var i18n = new Jed(languageData);

		var selectedLanguage = selectElement.value;
			
		renderingArea.innerHTML = i18n.translate( "Devlopment" ).onDomain(selectedLanguage).fetch();

	};	

	selectElement.onchange = updateLanguage;

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