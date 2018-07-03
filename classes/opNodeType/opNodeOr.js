const ASTNode = require('../ASTNode');

class opNodeOr extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Or: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeOr;