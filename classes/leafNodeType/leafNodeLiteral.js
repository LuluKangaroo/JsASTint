class leafNodeLiteral {
    constructor(value){
        this._val = value
    }

    get Expression(){
        return "Literal: " + this._val
    }
};

module.exports = leafNodeLiteral;