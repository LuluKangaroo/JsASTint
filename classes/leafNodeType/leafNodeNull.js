const ASTNode = require('../ASTNode');

class leafNodeNull extends ASTNode{
    constructor(){
        super(null)
    }

    get Expression(){
        return "null"
    }
};

module.exports = leafNodeNull;