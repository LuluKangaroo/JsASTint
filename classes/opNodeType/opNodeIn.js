class opNodeIn{
    constructor(left, right){
        this._left = left
        this._right = right
    }
	
	get Expression(){
        return this._left.Expression() + " in " + this._right.Expression()
    }
};

module.exports = opNodeIn;