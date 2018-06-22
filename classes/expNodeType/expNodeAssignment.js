class expNodeAssignment{
    constructor(name, value){
        this._name = name
        this._value = value
    }

    get Expression(){
        return this._name + " = " + this._value.Expression
    }
};

module.exports = expNodeAssignment;