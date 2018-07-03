const ASTNode = require('../ASTNode');

class opNodeExp extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Exponents: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeExp;