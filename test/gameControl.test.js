var gameControl = require('./../gameControl')

var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon')

describe('gameControl', function(){

	describe('#putPlayerOption()', function(){

		var player1TestOption = 'Rock'
		var player2TestOption = 'Paper'			

		var player1TestConsole = {getOption:function(){ return player1TestOption},renderOption:function(){}}			
		var player2TestConsole = {getOption:function(){ return player2TestOption },renderOption:function(){}}			

		var console1RenderOptionsSpy = sinon.spy(player1TestConsole, 'renderOption')
		var console2RenderOptionsSpy = sinon.spy(player2TestConsole, 'renderOption')

		var gameLogicSpy = sinon.spy(gameLogic, 'getScore')
		gameControl.setScoreBoardUpdater( function(){} )
			
		beforeEach( function(){
			gameControl.reset()
		})

		it('should not show options or update score with only the first player option', function(){

			gameControl.putPlayerOption( player1TestConsole, 0 )
			
			expect( console1RenderOptionsSpy.called ).to.be.false
			expect( console2RenderOptionsSpy.called ).to.be.false
			expect( gameLogicSpy.called ).to.be.false
		})
		
		it('should not show options or update score with only the second player option', function(){

			gameControl.putPlayerOption( player2TestConsole, 1 )
			
			expect( console1RenderOptionsSpy.called ).to.be.false
			expect( console2RenderOptionsSpy.called ).to.be.false
			expect( gameLogicSpy.called ).to.be.false
		})		

		it('should show options and update score with both player options', function(){

			gameControl.putPlayerOption( player2TestConsole, 1 )
			gameControl.putPlayerOption( player1TestConsole, 0 )
			
			expect( console1RenderOptionsSpy.called ).to.be.true
			expect( console2RenderOptionsSpy.called ).to.be.true
			expect( gameLogicSpy.calledWith(player1TestOption, player2TestOption) ).to.be.true
		})		
	})
})