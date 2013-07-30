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
				
				gameLogic.getAllOptions().forEach(function(option)
				{
					var $newOptionButton = document.createElement('button');
					$newOptionButton.setAttribute('class','option');
					$newOptionButton.setAttribute('id', option);
					$newOptionButton.innerHTML = option;
					$elem.appendChild($newOptionButton);
				})

				var $optionNodeList = document.getElementsByClassName('option')
				for (var i = 0; i < $optionNodeList.length; ++i)
				{
					$optionNodeList[i].onclick = this.getOptionClickHandler()
				}	
			},
			
			getOptionClickHandler:function()
			{
				var thisConsole = this;
				return function() {
					thisConsole.humanOption = this.id
					thisConsole.playerOptionListener( thisConsole )
				}
			},
			
			renderOption:function()
			{
				this.$elem.innerText = this.humanOption
				this.$elem.textContent = this.humanOption
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