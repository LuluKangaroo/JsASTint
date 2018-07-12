const ASTNode = require('../ASTNode');

class funcNodeUserDec extends ASTNode{
    constructor(name, params, body, gen, async, exp){
        super(null)
        this._name = name
        this._params = params
        this._body = body
        this._generator = gen
        this._async = async
        this._expression = exp
    }

    get Expression(){
    	var funcPrint = "\nUser Declared function: " + this._name._val + "\n"
        funcPrint += "\tParameters: "
    	this._params.forEach(function (ele){
    		funcPrint += ele.Expression + " "
    	})
        funcPrint += "\n\tBody: \n"

        this._body.forEach(function (ele){
            funcPrint += "\t\t" + ele.Expression + "\n"
        })

        return funcPrint
    }
};

module.exports = funcNodeUserDec;