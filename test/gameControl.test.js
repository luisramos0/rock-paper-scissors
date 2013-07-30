var gameControl = require('./../gameControl')

var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon')

describe('gameControl', function(){

	describe('#putPlayerOption()', function(){

		var player1TestOption = 'Rock'
		var player2TestOption = 'Paper'			
		var testScore = 'You Lost...'
		
		var endOfGameListenerSpy1
		var endOfGameListenerSpy2
					
		beforeEach( function(){
			gameControl.reset()
			
			endOfGameListenerSpy1 = sinon.spy()
			endOfGameListenerSpy2 = sinon.spy()
			
			gameControl.addEndOfGameListener( endOfGameListenerSpy1 )
			gameControl.addEndOfGameListener( endOfGameListenerSpy2 )
		})

		it('should notify all end of game listeners', function(){
			
			gameControl.putPlayerOption( 1, player2TestOption )
			gameControl.putPlayerOption( 0, player1TestOption )
			
			expect( endOfGameListenerSpy1.called ).to.be.true
			expect( endOfGameListenerSpy2.called ).to.be.true
		})
		
		it('should notify end of game listeners with calculated score', function(){
		
			gameControl.putPlayerOption( 1, player2TestOption )
			gameControl.putPlayerOption( 0, player1TestOption )
			
			expect( endOfGameListenerSpy1.calledWith( testScore ) ).to.be.true
			expect( endOfGameListenerSpy2.calledWith( testScore ) ).to.be.true
		})		

		it('should not notify all end of game listeners with only the first player option', function(){

			gameControl.putPlayerOption( 0, player1TestOption )
			
			expect( endOfGameListenerSpy1.called ).to.be.false
		})
		
		it('should not notify all end of game listeners with only the second player option', function(){

			gameControl.putPlayerOption( 1, player2TestOption )
			
			expect( endOfGameListenerSpy2.called ).to.be.false
		})		
	})
})