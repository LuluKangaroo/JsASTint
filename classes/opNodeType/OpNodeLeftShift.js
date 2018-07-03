const ASTNode = require('../ASTNode');

class opNodeLeftShift extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Left Shift: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeLeftShift;