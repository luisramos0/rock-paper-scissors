/**
 * Basic player console template (it would be better in an html template)
**/
var consoleTemplate = {

	render:function(console, elemId)
	{
		var $elem = document.getElementById( elemId )
		
		var $consoleTitle = $elem.getElementsByClassName('title')
		if( $consoleTitle.length == 0 )
		{
			var $newTitleSpan = document.createElement('span');
			$newTitleSpan.setAttribute('class','title');
			$newTitleSpan.innerHTML = console.getTitle();
			$elem.appendChild($newTitleSpan);
		}
		
		var $consoleContent = $elem.getElementsByClassName('content')
		if( $consoleContent.length == 0 )
		{
			var $newContentDiv = document.createElement('div');
			$newContentDiv.setAttribute('class','content');
			$elem.appendChild($newContentDiv);
			$consoleContent[0] = $newContentDiv
		}
		$consoleContent[0].innerText = ''
		$consoleContent[0].textContent = ''
		
		console.render($consoleContent[0])
	}	
}