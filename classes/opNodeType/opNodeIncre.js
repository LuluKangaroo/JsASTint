class opNodeIncre{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "Op node Increment: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeIncre;