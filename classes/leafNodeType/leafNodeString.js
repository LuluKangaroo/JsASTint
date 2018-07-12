const ASTNode = require('../ASTNode');

class leafNodeString extends ASTNode{
    constructor(value){
        super(null)
        this._val = value
        this._type = "string"
    }

    get Expression(){
        return "(" + this._val + ": string)"
    }
};

module.exports = leafNodeString;