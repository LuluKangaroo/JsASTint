const ASTNode = require('../ASTNode');

class opNodeEqual extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Equals: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeEqual;