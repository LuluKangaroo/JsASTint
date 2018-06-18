class funcNoderound{
    constructor(name, args){
        this._name = name
        this._args = args

        console.log("Constructor args: " + args)

        // args.forEach(function (ele){
        // 	this._args.push(ele)
        // })
    }

    // setArgs(callArgs){
	   //  	console.log("\nthis._args type:")
	   //  	console.log(typeof this._args)
    //     callArgs.forEach(function (ele){
	   //  	console.log("\nthis._args type:")
	   //  	console.log(typeof this._args)
    //     	this._args.push(ele)
    //     })	
    // }

    get Expression(){
    	var makeExpression = this._name + "( "
    	this._args.forEach(function (ele){
    		// Getter methods within classes:
    		// do NOT add () at end of call
    		makeExpression += ele.Expression + ", "
    	})
        return makeExpression + ")"
    }
};

module.exports = funcNoderound;