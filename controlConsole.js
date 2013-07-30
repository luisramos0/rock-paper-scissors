/**
 * Renders the control console with the play-mode toggle, the score and the reset button
**/
var controlConsole = {
	
	render:function( resetGameFunction )
	{
		var $resetButton = document.getElementById('reset-button')
		$resetButton.onclick = resetGameFunction
		
		var playModeNodeList = document.getElementsByClassName('play-mode')
		for (var i = 0; i < playModeNodeList.length; ++i)
		{
			playModeNodeList[i].onclick = resetGameFunction
		}
	},
	
	updateScoreBoard:function(score)
	{
		document.getElementById('score').innerText = score
		document.getElementById('score').textContent = score
		
		document.getElementById('reset-button').style.display = 'block'
	},
	
	clearScoreBoard:function()
	{
		this.updateScoreBoard('')
		document.getElementById('reset-button').style.display = 'none'	
	},

	isHumanVsComputerModeSelected:function()
	{
		return document.querySelector('.play-mode:checked').value == 'human-computer'
	}
}

if (typeof module != 'undefined')
	module.exports = controlConsole