const ASTNode = require('../ASTNode');

class opNodeNot extends ASTNode{
    constructor(right){
		super()
        this._right = right
    }
	
	get Expression(){
        return "Op node Not: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeNot;