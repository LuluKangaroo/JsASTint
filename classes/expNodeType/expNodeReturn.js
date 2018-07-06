const ASTNode = require('../ASTNode');

class expNodeReturn extends ASTNode{
    constructor(arg){
        super(null)
        this._argument = arg
    }

    get Expression(){
    	if(this._argument != null){
	    	var printLine = "return " + this._argument.Expression
    	}else{
    		var printLine = "return null"
    	}
        return printLine
    }
};

module.exports = expNodeReturn;