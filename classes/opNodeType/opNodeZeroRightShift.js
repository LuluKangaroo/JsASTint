const ASTNode = require('../ASTNode');

class opNodeZeroRightShift extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Zero Right Shift: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeZeroRightShift;