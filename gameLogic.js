/**
 * Core game logic: paper beats rock, rock beats scissors, scissors beats paper, and so on.
**/
var gameLogic = {

		ROCK:'Rock',
		PAPER:'Paper',
		SCISSORS:'Scissors',
		
		getAllOptions: function()
		{
			return [this.ROCK, this.PAPER, this.SCISSORS]
		},
		
		getScore:function(optionPlayer1, optionPlayer2)
		{
			var score = 0
			if(optionPlayer1!==optionPlayer2)
			{
				if( optionPlayer1 == this.ROCK )
				{
					score = ( optionPlayer2 == this.SCISSORS ) ? 1 : -1
				}
				if( optionPlayer1 == this.PAPER )
				{
					score = ( optionPlayer2 == this.ROCK ) ? 1 : -1
				}
				if( optionPlayer1 == this.SCISSORS )
				{
					score = ( optionPlayer2 == this.PAPER ) ? 1 : -1
				}
			}
			return score;
		},
		
		getScoreDescription:function(numericScore)
		{
			var scores = {
				'0':'Tie',
				'-1':'You Lost...',
				'1':'You Won!'
			}
			return scores[numericScore]
		}
}

if (typeof module != 'undefined')
	module.exports = gameLogic