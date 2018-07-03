class leafNodeLiteral {
    constructor(value){
        this._val = value
    }

    get Expression(){
        return "(" + this._val + ": literal)"
    }
};

module.exports = leafNodeLiteral;