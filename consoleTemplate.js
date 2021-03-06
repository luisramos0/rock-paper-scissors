/**
 * Basic player console HTML template
**/
var consoleTemplate = {

	render:function(elemId, consoleTitle)
	{
		var $elem = document.getElementById( elemId )
			
		var titleSpanHtml = '<span class="title">' + consoleTitle + '</span>' 
		var contentDivHtml = '<div class="content"></div>'
		$elem.innerHTML = titleSpanHtml + contentDivHtml
		
		var $consoleContent = $elem.getElementsByClassName('content')
		return $consoleContent[0]
	}	
}