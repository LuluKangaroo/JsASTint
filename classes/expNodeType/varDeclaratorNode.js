const ASTNode = require('../ASTNode');

class varDeclaratorNode extends ASTNode{
    constructor(name, value){
        super(null)
        this._name = name
        this._value = value
    }

    get Expression(){
        return this._name.Expression + " = " + this._value.Expression
    }
};

module.exports = varDeclaratorNode;