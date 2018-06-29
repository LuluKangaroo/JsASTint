class opNodeDecre{
    constructor(right){
        this._right = right
    }
	
	get Expression(){
        return "-" + this._right.Expression
    }
};

module.exports = opNodeDecre;