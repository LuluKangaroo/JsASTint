const ASTNode = require('../ASTNode');

class expNodeVarDec extends ASTNode{
    constructor(decArray){
        super(null)
        this._declarations = decArray
    }

    get Expression(){
    	var arrPrint = "var "
    	this._declarations.forEach(function (ele){
    		arrPrint += ele.Expression + ", "
    	})
        return arrPrint
    }
};

module.exports = expNodeVarDec;