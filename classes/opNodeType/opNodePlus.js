class opNodePlus{
    constructor(left, right){
        this._left = left
        this._right = right
    }

    get Expression(){
    	// Change expression prints
        return this._left.Expression + " + " + this._right.Expression
    }
};

module.exports = opNodePlus;