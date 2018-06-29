class opNodeTypeOf{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "typeof " + this._right.Expression
    }
};

module.exports = opNodeTypeOf;