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
			
		this.resetGame()
	},
	
	resetGame:function()
	{	
		controlConsole.clearScoreBoard()
		gameControl.reset()
		
		var player1Console = controlConsole.isHumanVsComputerModeSelected() ? humanConsoleFactory.create() : computerConsoleFactory.create()
		this.renderPlayerConsole( 'console-player-1', player1Console, 0 )
	
		var player2Console = computerConsoleFactory.create()
		this.renderPlayerConsole( 'console-player-2', player2Console, 1 )

		gameControl.addEndOfGameListener( function(score) {
			controlConsole.updateScoreBoard(score)
		})
	},
	
	renderPlayerConsole:function( elemId, console, playerIndex )
	{
		console.setPlayerOptionListener( function( playerOption, playerEndOfGameFunction ) {
			gameControl.addEndOfGameListener( playerEndOfGameFunction )
			gameControl.putPlayerOption( playerIndex, playerOption )
		})
	
		var $content = consoleTemplate.render( elemId, console.getTitle())
		console.render($content)
	}
}