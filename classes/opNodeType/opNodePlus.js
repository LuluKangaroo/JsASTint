class opNodePlus{
    constructor(left, right){
        this._left = left
        this._right = right
    }

    get Expression(){
        return "( OpNode: Plus " + this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodePlus;