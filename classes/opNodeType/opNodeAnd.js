const ASTNode = require('../ASTNode');

class opNodeAnd extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node And: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeAnd;