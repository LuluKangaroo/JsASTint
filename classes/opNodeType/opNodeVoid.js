class opNodeVoid{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "Op node void: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeVoid;