var gameLogic = require('./../gameLogic')

var chai = require('chai')
var expect = chai.expect;

describe('gameLogic', function(){
  
	describe('#getAllOptions()', function(){
    
		it('should provide options: Rock, Paper, Scissors', function(){
			expect( gameLogic.getAllOptions()).to.be.deep.equal(["Rock", "Paper", "Scissors"])
		})
	})
	
	describe('#getScore()', function(){
	
		it('should let Paper beat Rock', function(){
			expect( gameLogic.getScore('Paper', 'Rock') ).to.be.equal( 1 )
		})

		it('should not let Rock beat Paper', function(){
			expect( gameLogic.getScore('Rock', 'Paper') ).to.be.equal( -1 )
		})

		it('should let Scissors beat Paper', function(){
			expect( gameLogic.getScore('Scissors', 'Paper') ).to.be.equal( 1 )
		})

		it('should not let Paper beat Scissors', function(){
			expect( gameLogic.getScore('Paper', 'Scissors') ).to.be.equal( -1 )
		})

		it('should let Rock beat Scissors', function(){
			expect( gameLogic.getScore('Rock', 'Scissors') ).to.be.equal( 1 )
		})

		it('should not let Scissors beat Rock', function(){
			expect( gameLogic.getScore('Scissors', 'Rock') ).to.be.equal( -1 )
		})
		
		it('should tie Rock vs Rock', function(){
			expect( gameLogic.getScore('Rock', 'Rock') ).to.be.equal( 0 )
		})

		it('should tie Paper vs Paper', function(){
			expect( gameLogic.getScore('Paper', 'Paper') ).to.be.equal( 0 )
		})

		it('should tie Scissors vs Scissors', function(){
			expect( gameLogic.getScore('Scissors', 'Scissors') ).to.be.equal( 0 )
		})
	})
	
	describe('#getScoreDescription()', function(){
	
		it('should describe 1 as Won', function(){
			expect( gameLogic.getScoreDescription( 1 ) ).to.be.equal( 'You Won!' )
		})

		it('should describe 0 as Tie', function(){
			expect( gameLogic.getScoreDescription( 0 ) ).to.be.equal( 'Tie' )
		})

		it('should describe -1 as Lost', function(){
			expect( gameLogic.getScoreDescription( -1 ) ).to.be.equal( 'You Lost...' )
		})			
	})
})