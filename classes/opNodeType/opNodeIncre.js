const ASTNode = require('../ASTNode');

class opNodeIncre extends ASTNode{
    constructor(right){
		super()
        this._right = right
    }
	
	get Expression(){
        return "Op node Increment: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeIncre;