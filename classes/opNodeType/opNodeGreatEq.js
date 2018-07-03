const ASTNode = require('../ASTNode');

class opNodeGreatEq extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Greater than/eq. to: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeGreatEq;