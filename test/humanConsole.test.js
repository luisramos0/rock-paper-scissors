gameLogic = require('./../gameLogic')
var humanConsoleFactory = require('./../humanConsole')

var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon')

describe('humanConsole', function(){

	describe('#render()', function(){

		var humanConsole
		var testElement = {
			appendChild:function() {}
		}
		
		beforeEach( function(){
		
			 humanConsole = humanConsoleFactory.create()
			 
			 var newElement = {
				setAttribute:function(){}
			}
					
			document = {
				getElementsByClassName:function(){ return []},
				createElement:function() { return newElement }
			}
		})
		
		it('should add options to the DOM', function(){

			var testOptions = ['option1', 'option2', 'option3']
			var optionsStub = sinon.stub(gameLogic, 'getAllOptions').returns(testOptions)
			
			humanConsole.render(testElement)
			
			testOptions.forEach(function(option){
				expect( testElement.innerHTML ).to.contain(option)
			})
		})
		
		it('should call playerOptionListener when option is clicked', function(){
		
			var playerOptionListenerSpy = sinon.spy()
			
			humanConsole.setPlayerOptionListener(playerOptionListenerSpy)
			humanConsole.render(testElement)
			var optionClickHandler = humanConsole.getOptionClickHandler()
			optionClickHandler()
			
			expect( playerOptionListenerSpy.called ).to.be.true
		})
	})
})