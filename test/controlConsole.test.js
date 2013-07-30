var controlConsole = require('./../controlConsole')

var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon')

describe('controlConsole', function(){

	describe('#render()', function(){

		var testResetButton
		var testPlayModeCheckbox
	
		beforeEach( function(){
			
			testResetButton = {}
			testPlayModeCheckbox = {}
			
			document = {
				getElementById : function(id) {
					if( id === 'reset-button' )
						return testResetButton
				},
				getElementsByClassName : function(className) {
					if( className === 'play-mode' )
						return [{}, testPlayModeCheckbox]
				}
			}
		})
		
		it('should reset game on reset button click', function(){
		
			var testResetGameFunctionSpy = sinon.spy()
			
			controlConsole.render(testResetGameFunctionSpy)
			
			expect( testResetButton.onclick ).to.be.equal( testResetGameFunctionSpy )
		})
		
		it('should reset game on play mode checkbox click', function(){
			
			var testResetGameFunctionSpy = sinon.spy()
			
			controlConsole.render(testResetGameFunctionSpy)
			
			expect( testPlayModeCheckbox.onclick ).to.be.equal( testResetGameFunctionSpy )
		})
		
	})
})