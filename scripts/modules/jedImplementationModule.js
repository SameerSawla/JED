define(['scripts/modules/getJSONData.js','scripts/jed.js'],function(getJSONData,$){

	var selectOnChange = function(){

		var selectedElement = document.getElementById("selectLanguage");
		selectElement.onchange = function(){

		var test = JSON.parse(JSON.stringify(getJSONData.getJSON(selectElement.value)));
		var i18n = new Jed(test);

		var selectedLanguage = document.getElementById("selectLanguage").value;

		var divOne = document.getElementById("divOne");
		divOne.innerHTML = i18n.translate( "Devlopment" ).onDomain(selectedLanguage).fetch();
		

	};	

};

	var populateDefaultLanguage = function(){
		var selectElement = document.getElementById('selectLanguage');
		var language = window.navigator.userLanguage || window.navigator.language;
		for(var i=0;i<selectElement.length;i++)
		{
			if(selectElement[i].value==language)
			{
				selectElement.selectedIndex = i;
				break;
			}
		}
		selectElement.onchange();
	};

	return {
		performOp : selectOnChange,
		populateDefLang : populateDefaultLanguage
	};
});