const ASTNode = require('../ASTNode');
class leafNodeNumber extends ASTNode{
    constructor(value){
        super(null)
        this._val = value

    }

    get Expression(){
        return "(" + this._val + ": number)"
    }
};

module.exports = leafNodeNumber;