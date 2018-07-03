const ASTNode = require('../ASTNode');

class opNodeComple extends ASTNode{
    constructor(right){
		super()
        this._right = right
    }
	
	get Expression(){
        return "Op node complement: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeComple;