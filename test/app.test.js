// controlConsole = require('./../controlConsole')
var app = require('./../app')

var chai = require('chai')
var expect = chai.expect;
var sinon = require('sinon')

describe('app', function(){
  
	describe('#bootstrap()', function(){
    
		var testComputerConsole = {
			setPlayerOptionListener:function(){},
			getTitle:function(){},
			render:function(){}
		}
		
		var testHumanConsole = {
			setPlayerOptionListener:function(){},
			getTitle:function(){},
			render:function(){}
		}

		beforeEach( function(){
		
			controlConsole = {
				render: function(){},
				clearScoreBoard: function(){},
				isHumanVsComputerModeSelected: function(){ return false }
			}
			
			gameControl = {
				reset: function(){},
				addEndOfGameListener: function(){}
			}
			
			computerConsoleFactory = {
				create: function() {
					return testComputerConsole
				}	
			}
			
			humanConsoleFactory = {
				create: function() {
					return testHumanConsole
				}	
			}

			consoleTemplate = {
				render:function(){}
			}
		})
		
		it('should render controlConsole and clear score on bootstrap', function(){
			
			var controlConsoleRenderSpy = sinon.spy( controlConsole, 'render' )
			var controlConsoleClearScoreBoard = sinon.spy( controlConsole, 'clearScoreBoard' )
			
			app.bootstrap()
			
			expect( controlConsoleRenderSpy.called ).to.be.true
			expect( controlConsoleClearScoreBoard.called ).to.be.true
		})			
		
		it('should reset game control on bootstrap', function(){
			
			var gameControlResetSpy = sinon.spy( gameControl, 'reset' )
			var gameControlAddEndOfGameListenerSpy = sinon.spy( gameControl, 'addEndOfGameListener' )
			
			app.bootstrap()
			
			expect( gameControlResetSpy.called ).to.be.true
			expect( gameControlAddEndOfGameListenerSpy.called ).to.be.true
		})			
		
		it('should create and render computer console on bootstrap', function(){
			
			var computerConsoleFactorySpy = sinon.spy( computerConsoleFactory, 'create' )
			var computerConsoleRenderSpy = sinon.spy( testComputerConsole, 'render' )
			var computerConsoleSetPlayerOptionListenerSpy = sinon.spy( testComputerConsole, 'setPlayerOptionListener' )
									
			app.bootstrap()
			
			expect( computerConsoleFactorySpy.called ).to.be.true
			expect( computerConsoleRenderSpy.called ).to.be.true
			expect( computerConsoleSetPlayerOptionListenerSpy.called ).to.be.true
		})			

		it('should create and render human console on bootstrap', function(){
			
			sinon.stub( controlConsole, 'isHumanVsComputerModeSelected' ).returns( true )
			
			var humanConsoleFactorySpy = sinon.spy( humanConsoleFactory, 'create' )
			var humanConsoleRenderSpy = sinon.spy( testHumanConsole, 'render' )
			var humanConsoleSetPlayerOptionListenerSpy = sinon.spy( testHumanConsole, 'setPlayerOptionListener' )
			var consoleTemplateRenderSpy = sinon.spy( consoleTemplate, 'render' )
			
			app.bootstrap()
			
			expect( humanConsoleFactorySpy.called ).to.be.true
			expect( humanConsoleRenderSpy.called ).to.be.true
			expect( humanConsoleSetPlayerOptionListenerSpy.called ).to.be.true
			expect( consoleTemplateRenderSpy.called ).to.be.true
		})
	})
})