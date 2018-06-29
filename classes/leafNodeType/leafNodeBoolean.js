const ASTNode = require('../ASTNode');
class leafNodeBoolean extends ASTNode{
    constructor(value){
        super(null)
        this._val = value

    }

    get Expression(){
        return "( " + this._val + ": boolean)"
    }
};

module.exports = leafNodeBoolean;