class ASTNode{
    constructor(){
	    if (new.target === ASTNode) {
	      throw new TypeError("Cannot construct Abstract instances directly");
	    }
    }

    get Expression(){
    	console.log("Expression method empty");
    	return;
    }

    get Content(){
    	console.log("Content method empty");
    	return;
    }
};

module.exports = ASTNode;