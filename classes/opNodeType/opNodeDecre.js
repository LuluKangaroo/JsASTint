const ASTNode = require('../ASTNode');

class opNodeDecre extends ASTNode{
    constructor(right){
		super()
        this._right = right
    }
	
	get Expression(){
        return "Op node decrement: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeDecre;