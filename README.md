Notes:
- requirejs: I have assumed requirejs could be plugged in with minimal effort and all global scope polution would dissapear (both code and test)
- jquery: I have enjoyed going back to the world of no jquery but I have noted that the code is more verbose, much less resilient and much harder to test (this was the main reason for low coverage in code with DOM manipulation)

How to build: no build required, just load index.html with Chrome

How to run the tests: after installing node, mocha, chai and sinon (with npm install), go to the base folder and type mocha to run the tests