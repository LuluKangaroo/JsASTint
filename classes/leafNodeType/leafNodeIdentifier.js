class leafNodeIdentifier {
    constructor(value){
        this._val = value
    }

    get Expression(){
        return "(" + this._val + ": identifier)"
    }

    get value(){
    	return this._val
    }
};

module.exports = leafNodeIdentifier;