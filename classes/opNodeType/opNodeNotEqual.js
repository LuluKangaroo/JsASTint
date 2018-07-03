const ASTNode = require('../ASTNode');

class opNodeNotEqual extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Not Equal: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeNotEqual;