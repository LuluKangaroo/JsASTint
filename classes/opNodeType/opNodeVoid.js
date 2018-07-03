const ASTNode = require('../ASTNode');

class opNodeVoid extends ASTNode{
    constructor(right){
		super()
        this._right = right
    }
	
	get Expression(){
        return "Op node void: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeVoid;