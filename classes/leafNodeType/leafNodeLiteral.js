class leafNodeLiteral {
    constructor(value){
        this._val = value
    }

    get Expression(){
        return this._val + " Literal"
    }
};

module.exports = leafNodeLiteral;