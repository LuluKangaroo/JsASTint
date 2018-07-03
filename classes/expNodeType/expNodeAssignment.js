const ASTNode = require('../ASTNode');

class expNodeAssignment extends ASTNode{
    constructor(name, value){
        super(null)
        this._name = name
        this._value = value
    }

    get Expression(){
        return this._name + " = " + this._value.Expression
    }
};

module.exports = expNodeAssignment;