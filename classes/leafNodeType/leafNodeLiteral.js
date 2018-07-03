const ASTNode = require('../ASTNode');

class leafNodeLiteral extends ASTNode{
    constructor(value){
        super(null)
        this._val = value
    }

    get Expression(){
        return "(" + this._val + ": literal)"
    }
};

module.exports = leafNodeLiteral;