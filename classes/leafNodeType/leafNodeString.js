const ASTNode = require('../ASTNode');
class leafNodeString extends ASTNode{
    constructor(value){
        super(null)
        this._val = value

    }

    get Expression(){
        return "(" + this._val + ": string)"
    }
};

module.exports = leafNodeString;