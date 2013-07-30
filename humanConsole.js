/**
 * Renders all options and lets user to select one option
**/
var humanConsoleFactory = {

	create: function()
	{
		return {
			getTitle:function()
			{
				return 'You'
			},
			
			render:function($elem)
			{
				this.$elem = $elem
				
				gameLogic.getAllOptions().forEach(function(option) {
					$elem.innerHTML += '<button class="option" id="' + option + '">' + option + '</button>'
				})
				
				var $optionNodeList = document.getElementsByClassName('option')
				for ( var i = 0; i < $optionNodeList.length; ++i ) {
					$optionNodeList[i].onclick = this.getOptionClickHandler()				
				}				
			},
			
			getOptionClickHandler : function()
			{
				var thisConsole = this;				
				return function() {
					thisConsole.humanOption = this.id
					thisConsole.playerOptionListener( thisConsole.getOption(), thisConsole.getEndOfGameFunction() )
				}
			},

			getEndOfGameFunction:function()
			{
				var thisConsole = this
				return function() {
					thisConsole.$elem.innerText = thisConsole.humanOption
					thisConsole.$elem.textContent = thisConsole.humanOption
				}
			},
			
			getOption:function()
			{
				return this.humanOption
			},

			setPlayerOptionListener:function(playerOptionListener)
			{
				this.playerOptionListener = playerOptionListener
			}
		}
	}
}

if (typeof module != 'undefined')
	module.exports = humanConsoleFactory