const ASTNode = require('../ASTNode');

class opNodeDiv extends ASTNode{
    constructor(left, right){
		super()
        this._left = left
        this._right = right
    }

    get Expression(){
        return "Op node Divide: (" + this._left.Expression + ", " + this._right.Expression + ")"
    }
};
module.exports = opNodeDiv;