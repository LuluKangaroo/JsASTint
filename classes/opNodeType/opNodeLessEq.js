class opNodeLessEq{
    constructor(left, right){
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Less than/eq to: ("this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeLessEq;