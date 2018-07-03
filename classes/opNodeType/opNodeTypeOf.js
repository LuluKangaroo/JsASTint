const ASTNode = require('../ASTNode');

class opNodeTypeOf extends ASTNode{
    constructor(right){
		super()
        this._right = right
    }
	
	get Expression(){
        return "Op node typeOf: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeTypeOf;