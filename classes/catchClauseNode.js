const ASTNode = require('./ASTNode');

class catchClauseNode extends ASTNode{
    constructor(param, body){
        super(null)
        this._param = param
        this._body = body
    }

    get Expression(){
    	return "Work on catchClauseNode expression :)"
    }
};

module.exports = catchClauseNode;