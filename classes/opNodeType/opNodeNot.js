class opNodeNot{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "Op node Not: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeNot;