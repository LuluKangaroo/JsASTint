class opNodeComple{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "Op node complement: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeComple;