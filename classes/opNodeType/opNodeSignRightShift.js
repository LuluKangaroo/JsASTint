class opNodeSignRightShift{
    constructor(left, right){
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return "Op node Signed Right Shift: ("this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeSignRightShift;