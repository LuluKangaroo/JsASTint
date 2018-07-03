const ASTNode = require('../ASTNode');

class opNodeDel extends ASTNode{
    constructor(right){
		super()
        this._right = right
    }
	
	get Expression(){
        return "Op node delete: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeDel;