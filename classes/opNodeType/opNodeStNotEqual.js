class opNodeStNotEqual{
    constructor(left, right){
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Strict Not Equal: ("this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeStNotEqual;