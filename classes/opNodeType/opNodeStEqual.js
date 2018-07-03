const ASTNode = require('../ASTNode');

class opNodeStEqual extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Strict Equal: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeStEqual;