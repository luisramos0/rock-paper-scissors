var controlConsole = require('./../controlConsole')

var chai = require('chai')
var expect = chai.expect;

describe('controlConsole', function(){

	var testResetButton
	var testPlayModeCheckbox
	var testScoreDiv
		
	beforeEach( function(){
			
		testResetButton = { style:{} }
		testPlayModeCheckbox = {}
		testScoreDiv = {}
			
		document = {
			getElementById : function(id) {
				if( id === 'reset-button' )
					return testResetButton
				if( id === 'score' )
					return testScoreDiv
			},
			getElementsByClassName : function(className) {
				if( className === 'play-mode' )
					return [{}, testPlayModeCheckbox]
			}
		}
	})

	describe('#render()', function() {
	
		it('should reset game on reset button click', function(){
		
			var testResetGameFunction = function() {}
			
			controlConsole.render(testResetGameFunction)
			
			expect( testResetButton.onclick ).to.be.equal( testResetGameFunction )
		})
		
		it('should reset game on play mode checkbox click', function(){
			
			var testResetGameFunction = function() {}
			
			controlConsole.render(testResetGameFunction)
			
			expect( testPlayModeCheckbox.onclick ).to.be.equal( testResetGameFunction )
		})
	})
	
	describe('#updateScoreBoard()', function() {
	
		it('should update score in DOM and show reset button', function(){
			
			var testScore = 'YES'
		
			controlConsole.updateScoreBoard( testScore )
			
			expect( testScoreDiv.innerText ).to.be.equal( testScore )
			expect( testResetButton.style.display ).to.be.equal( 'block' )
		})
	})
	
	describe('#clearScoreBoard()', function() {
	
		it('should clear score board and hide reset button', function(){
					
			controlConsole.clearScoreBoard()
			
			expect( testScoreDiv.innerText ).to.be.equal( '' )
			expect( testResetButton.style.display ).to.be.equal( 'none' )
		})
	})
})