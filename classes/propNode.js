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
        // console.log("Key: ",  this._key)
        // console.log("Key type: ", typeof this._key)
        // console.log("Value: ",  this._value)
        // console.log("Value type: ", typeof this._value)
        return "Object property: { " + this._key.Expression + ":" + this._value.Expression + " }";
    }
};

module.exports = propNode;