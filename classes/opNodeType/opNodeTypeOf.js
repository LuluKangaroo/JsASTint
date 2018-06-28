class opNodeTypeOf{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "Op node typeOf: (" + this._right.Expression + ")"
    }
};

module.exports = opNodeTypeOf;