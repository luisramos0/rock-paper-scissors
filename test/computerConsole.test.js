gameLogic = require('./../gameLogic')
var computerConsoleFactory = require('./../computerConsole')

var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon')

describe('computerConsole', function(){

	describe('#render()', function(){

		var computerConsole
		var testElement = {
			appendChild:function() {}
		}
		
		var playerOptionListenerSpy = sinon.spy()
		
		beforeEach( function(){
		
			computerConsole = computerConsoleFactory.create()
			computerConsole.setPlayerOptionListener(playerOptionListenerSpy)
			
			document = {
				createElement:function() { return {} }
			}
		})
		
		it('should add thinking message to the DOM', function(){

			var appendChildSpy = sinon.spy(testElement, 'appendChild')
			
			computerConsole.render(testElement)
			
			expect( appendChildSpy.calledOnce ).to.be.true
		})
		
		it('should call playerOptionListener after rendering', function(){
			
			computerConsole.render(testElement)
			
			expect( playerOptionListenerSpy.called ).to.be.true
		})
	})
})