/**
 * Game control logic: receives players input, uses game logic and notifies end of game with final score
**/
var gameControl = {

	playerOptions : [],
	endOfGameListeners : [],
	
	putPlayerOption : function(playerIndex, playerOption)
	{
		this.playerOptions[playerIndex] = playerOption
		
		if( this.playerOptions[0] != null && this.playerOptions[1] != null )
		{
			var numericScore = gameLogic.getScore(this.playerOptions[0], this.playerOptions[1])
			var score = gameLogic.getScoreDescription(numericScore)
			
			this.notifyEndOfGame(score)			
			this.reset()
		}
	},
	
	reset:function()
	{
		this.playerOptions = []
	},
	
	addEndOfGameListener:function(endOfGameListener)
	{
		this.endOfGameListeners.push( endOfGameListener )
	},
	
	notifyEndOfGame:function(score)
	{
		this.endOfGameListeners.forEach(function(endOfGameListener) {
			endOfGameListener(score)
		})
		endOfGameListeners = []
	}
}

if (typeof module != 'undefined')
	module.exports = gameControl