class sequenceExpNode{
    constructor(expList){
		this._expList = expList
    }

    get Expression(){
    	var makeExpression = "";
    	this._expList.forEach(function (ele){
    		// Getter methods within classes:
    		// do NOT add () at end of call
    		makeExpression += ele.Expression + "\n"
    	})
        return makeExpression
    }
};

module.exports = sequenceExpNode;