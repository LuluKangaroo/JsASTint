class opNodeMember{
    constructor(object, property){
        this._object = object
		this._property = property
    }
	
	get Expression(){
        return "Op node member of: ("this._left.Expression + ", " + this._right.Expression + ")"
    }
};

module.exports = opNodeMember;