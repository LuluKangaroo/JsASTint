class varDeclaratorNode{
    constructor(statements){
        this._statements = statements
    }

    get Expression(){
    	var makeExpression = "";
    	this._statements.forEach(function (ele){
    		// Getter methods within classes:
    		// do NOT add () at end of call
    		makeExpression += ele.Expression + "\n"
    	})
        return makeExpression
    }
};

module.exports = varDeclaratorNode;