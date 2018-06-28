class opNodeBitOr{
    constructor(left, right){
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Bitwise Or: ("this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeBitOr;