class opNodeMember{
    constructor(object, property){
        this._object = object
		this._property = property
    }
	
	get Expression(){
        return this._object + "." + this._property
    }
};

module.exports = opNodeMember;