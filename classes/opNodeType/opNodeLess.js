const ASTNode = require('../ASTNode');

class opNodeLess extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Less Than: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeLess;