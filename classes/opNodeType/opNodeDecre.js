class opNodeDecre{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "Op node decrement: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeDecre;