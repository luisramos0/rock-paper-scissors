/**
 * Renders a 'thinking' message while it generates a random option
**/
var computerConsoleFactory = {
	
	create:function()
	{
		return {
			getTitle:function()
			{
				return 'Computer'
			},
			
			render:function($elem)
			{
				this.$elem = $elem
			
				this.$elem.innerHTML = '<span>Thinking...</span>'
				
				this.computerOption = this.generateOption()

				this.playerOptionListener( this.getOption(), this.getEndOfGameFunction() )
			},
			
			getEndOfGameFunction:function()
			{
				var thisConsole = this
				return function()
				{
					thisConsole.$elem.innerText = thisConsole.computerOption
					thisConsole.$elem.textContent = thisConsole.computerOption
				}
			},

			getOption:function()
			{
				return this.computerOption
			},

			setPlayerOptionListener:function(playerOptionListener)
			{
				this.playerOptionListener = playerOptionListener
			},
			
			generateOption: function()
			{
				var allOptions = gameLogic.getAllOptions()
				var numberOfOptions = allOptions.length
			
				var randomOptionsIndex = (Math.floor(Math.random()*11)) % numberOfOptions
				return allOptions[randomOptionsIndex]
			}
		}
	}
}

if (typeof module != 'undefined')
	module.exports = computerConsoleFactory