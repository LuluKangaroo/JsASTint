const ASTNode = require('./ASTNode');

class propNode extends ASTNode{
    constructor(key, computed, value, kind, method, shorthand){
        super(null)
        this._key = key
        this._computed = computed
        this._value = value
        this._kind = kind
        this._method = method
        this._shorthand = shorthand
    }

    get Expression(){
        return "Object property: { " + this._key.Expression + ":" + this._value.Expression + " }";
    }
};

module.exports = propNode;