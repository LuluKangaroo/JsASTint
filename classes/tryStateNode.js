const ASTNode = require('./ASTNode');

class tryStateNode extends ASTNode{
    constructor(block, handler, finalizer){
        super(null)
        this._block = block
        this._handler = handler
        this._finalizer = finalizer
    }

    get Expression(){
    	return "Work on tryStateNode expression :)"
    }
};

module.exports = tryStateNode;
