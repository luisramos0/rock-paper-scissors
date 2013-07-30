/**
 * Bootstraps web application
**/
var rpsApp = {

	bootstrap:function()
	{	
		var thisApp = this
		controlConsole.render( function() {
			thisApp.resetGame()
		})
	
		gameControl.addEndOfGameListener( function(score) {
			controlConsole.updateScoreBoard(score)
		})
		
		this.resetGame()
	},
	
	resetGame:function()
	{
		controlConsole.clearScoreBoard()
		gameControl.reset()
		
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
	
	putPlayerOptionFunction:function(playerIndex)
	{
		return function(playerConsole)
		{
			gameControl.addEndOfGameListener(function(){
				playerConsole.renderOption()
			})
			gameControl.putPlayerOption(playerIndex, playerConsole.getOption())
		}
	}	
}