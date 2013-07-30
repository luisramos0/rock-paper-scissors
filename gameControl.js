/**
 * Game control logic: fetches players input, calls game logic and updates score
**/
var gameControl = {

	consoles : [],

	putPlayerOption : function(playerConsole, consoleIndex)
	{
		this.consoles[consoleIndex] = playerConsole
		
		if( this.consoles[0] != null && this.consoles[1] != null )
		{
			this.consoles[0].renderOption()
			this.consoles[1].renderOption()
			
			var player1Option = this.consoles[0].getOption()
			var player2Option = this.consoles[1].getOption()
				
			var numericScore = gameLogic.getScore(player1Option, player2Option)
			var score = gameLogic.getScoreDescription(numericScore)
			
			this.updateScoreBoard(score)
			
			this.reset()
		}
	},
	
	reset:function()
	{
		this.consoles = []
	},
	
	setScoreBoardUpdater:function ( updateScoreBoard )
	{
		this.updateScoreBoard = updateScoreBoard
	}
}

if (typeof module != 'undefined')
	module.exports = gameControl