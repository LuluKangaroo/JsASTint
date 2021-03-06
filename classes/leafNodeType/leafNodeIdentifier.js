const ASTNode = require('../ASTNode');

class leafNodeIdentifier extends ASTNode{
    constructor(value){
        super(null)
        this._val = value
        this._type = "identifier"
    }

    get Expression(){
        return "(" + this._val + ": identifier)"
    }

    get value(){
    	return this._val
    }
};

module.exports = leafNodeIdentifier;