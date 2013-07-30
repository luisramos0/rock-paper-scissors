/**
 * Bootstraps web application
**/
var rpsApp = {

	bootstrap:function()
	{
		gameControl.setScoreBoardUpdater( this.updateScoreBoard )
		
		var thisApp = this
		var resetFormFunction = function() {
			thisApp.resetForm()
		}
		
		var $resetButton = document.getElementById('reset-button')
		$resetButton.onclick = resetFormFunction
		
		var playModeNodeList = document.getElementsByClassName('play-mode')
		for (var i = 0; i < playModeNodeList.length; ++i)
		{
			playModeNodeList[i].onclick = resetFormFunction
		}
		
		resetFormFunction()
	},

	updateScoreBoard:function(score)
	{
		document.getElementById('score').innerText = score
		document.getElementById('score').textContent = score
		document.getElementById('reset-button').style.display = 'block'
	},
	
	resetForm:function()
	{
			this.updateScoreBoard('')
			gameControl.reset()
			document.getElementById('reset-button').style.display = 'none'
		
			var consoles = this.getConsoles()
			
			consoles[0].setPlayerOptionListener(this.putPlayerOptionFunction(0))	
			consoles[1].setPlayerOptionListener(this.putPlayerOptionFunction(1))
			consoleTemplate.render( consoles[0], 'console-player-1')
			consoleTemplate.render( consoles[1], 'console-player-2')			
	},
	
	getConsoles:function()
	{
		var consoles = [computerConsoleFactory.create(), computerConsoleFactory.create()]	
		if( document.querySelector('.play-mode:checked').value == 'human-computer' )
		{
			consoles[0] = humanConsoleFactory.create()
		}
		return consoles
	},
	
	putPlayerOptionFunction:function(consoleIndex)
	{
		return function(playerConsole)
		{
			gameControl.putPlayerOption(playerConsole, consoleIndex)
		}
	}	
}