class opNodeDel{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "delete " + this._right.Expression
    }
};

module.exports = opNodeDel;