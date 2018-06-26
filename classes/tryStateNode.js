class tryStateNode{
    constructor(block, handler, finalizer){
        this._block = block
        this._handler = handler
        this._finalizer = finalizer
    }

    get Expression(){
    	return "Work on tryStateNode expression :)"
    }
};

module.exports = tryStateNode;
