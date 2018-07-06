const ASTNode = require('../ASTNode');

class objExp extends ASTNode{
    constructor(properties){
        super(null)
        this._properties = properties
    }

    get Expression(){
    	var finalPrint = "Object Expression ["
    	this._properties.forEach(function (ele){
    		finalPrint += "\n" + ele.Expression
    	})
    	finalPrint += " ]"
        return finalPrint
    }
};

module.exports = objExp;