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
		var $content = consoleTemplate.render( 'console-player-1', console[0].getTitle())
		console[0].render($content)
		
		consoles[1].setPlayerOptionListener(this.putPlayerOptionFunction(1))
		$content = consoleTemplate.render( 'console-player-2', consoles[1].getTitle())			
		console[1].render($content)
	},
	
	getConsoles:function()
	{
		var consoles = [computerConsoleFactory.create(), computerConsoleFactory.create()]	
		if( controlConsole.isHumanVsComputerModeSelected() )
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