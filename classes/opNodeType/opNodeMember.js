class opNodeMember{
    constructor(object, property){
        this._object = object
		this._property = property
    }
	
	get Expression(){
        return "Op node member of: (" + this._object.Expression + ", " + this._property.Expression + ")"
    }
};

module.exports = opNodeMember;