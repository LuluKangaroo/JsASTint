const ASTNode = require('../ASTNode');

class opNodeMult extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }

    get Expression(){
        return "Op node Multiply: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};
module.exports = opNodeMult;