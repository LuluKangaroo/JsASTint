/*************************
    Importing JS Files
**************************/
const onePathEnvironment = require('./classes/onePathEnvironment');
const leafNodeLiteral = require('./classes/leafNodeType/leafNodeLiteral');
const opNodePlus = require('./classes/opNodeType/opNodePlus');
const opNodeMinus = require('./classes/opNodeType/opNodeMinus');
const opNodeMult = require('./classes/opNodeType/opNodeMult');
const opNodeDiv = require('./classes/opNodeType/opNodeDiv');
const opNodeAnd = require('./classes/opNodeType/opNodeAnd');
const opNodeOr = require('./classes/opNodeType/opNodeOr');
const opNodeInstance = require('./classes/opNodeType/opNodeInstance');
const funcNodeRound = require('./classes/funcNodeType/funcNoderound');

// var glob = require( 'glob' )
//   , path = require( 'path' );

// glob.sync( './classes/**/*.js' ).forEach( function( file ) {
//   require( path.resolve( file ) );
// });



/*********************
    Program Start
**********************/

// Reading file input
var fs = require('fs');
var fileName = process.argv[2];
var srcCode = fs.readFileSync(fileName, 'utf-8');

// Parsing given file
var esprima = require('esprima');
var ASTs = esprima.parseScript(srcCode);
var ASTsWithLoc = esprima.parseScript(srcCode, {loc: true});

// Creating environment for paths
var env = new onePathEnvironment()


var fs2 = require('fs');
// Writing Parsed AST to JSON file
var srcFileName = fileName.substring(fileName.indexOf('/'), fileName.indexOf('.'))
var treeFileName = srcFileName + ".JSON"

fs2.writeFile('./parsedASTs/' + treeFileName, JSON.stringify(ASTsWithLoc, null, 2), (Error) => {
    if (Error) throw Error;

    console.log('Parsed tree saved to file: ')
});

// console.log('exit here!!!!!!!');
// exit();

/******************************************************
    Eval Function
        Recursively looping through the parsed AST
*******************************************************/
function eval_node(node, env) {

    // Checking that environment is recursively passed
    if (env == null){
        throw "Error: Please Check the env!!!"
    }

    var ins_node = node.type

    switch (String(ins_node)) {
        case "VariableDeclaration":
            // console.log(JSON.stringify(node.declarations, null,2))
            // console.log(JSON.stringify(typeof node.declarations, null,2))
            // console.log("The First Del")
            // console.log(JSON.stringify(node.declarations[0], null,2))
            // console.log(JSON.stringify(node.declarations[0].type, null,2))
            // console.log(JSON.stringify(node.declarations[0].id, null,2))
            // console.log(JSON.stringify(node.declarations[0].init, null,2))
            // console.log("The 2nd Del")
            // console.log(JSON.stringify(node.declarations[1], null,2))
            // eval_node(node.declarations[0])
            node.declarations.forEach(function (each_declarator){
                eval_node(each_declarator,env)
            });
            return

        case "VariableDeclarator":
            varName = eval_node(node.id, env)
            varVal = eval_node(node.init, env)
            // console.log("case2\n")
            env.setVariable(varName, varVal )
            return

        case "ExpressionStatement":
            eval_node(node.expression, env)
            return

        case "AssignmentExpression":
            varName = eval_node(node.left, env)
            varVal = eval_node(node.right, env)
            // console.log("\n-----AssignmentExpression prints------")
            // console.log(varName)
            // console.log('varVal: ')
            // console.log(varVal)
            // throw "die Here!"
            env.setVariable(varName, varVal)
            return

        /****************************************
            Binary Expression Cases

                instanceof, in, +, -, *, /, %
                **, |, ^, &, ==, !=, ===, !==
                <, >, <=, <<, >>, >>>
        *****************************************/
        case "BinaryExpression":
            opertor = node.operator
            left = eval_node(node.left, env)
            right = eval_node(node.right, env)

            switch (opertor){
                case "instanceof":
                    opNode = new opNodeInstance(left, right)
                    return opNode

                case "in":
                    opNode = new opNodeIn(left, right)
                    return opNode

                case "+":
                    opNode = new opNodePlus(left, right)
                    return opNode

                case "-":
                    opNode = new opNodeMinus(left, right)
                    return opNode

                case "*":
                    opNode = new opNodeMult(left, right)
                    return opNode

                case "/":                
                    opNode = new opNodeDiv(left, right)
                    return opNode

				case "%":
					opNode = new opNodeMod(left, right)
					return opNode
					
				case "**":
					opNode = new opNodeExp(left, right)
					return opNode
					
				case "|":
					opNode = new opNodeBitOr(left, right)
					return opNode
					
				case "^":
					opNode = new opNodeBitXOr(left, right)
					return opNode
					
				case "&":
					opNode = new opNodeBitAnd(left, right)
					return opNode
					
				case "==":
					opNode = new opNodeEqual(left, right)
					return opNode
					
				case "!=":
					opNode = new opNodeNotEqual(left, right)
					return opNode
					
				case "===":
					opNode = new opNodeStEqual(left, right)
					return opNode
					
				case "!==":
					opNode = new opNodeStNotEqual(left, right)
					return opNode
					
				case "<":
					opNode = new opNodeLess(left, right)
					return opNode
					
				case ">":
					opNode = new opNodeGreat(left, right)
					return opNode
					
				case "<=":
					opNode = new opNodeLessEq(left, right)
					return opNode
					
				case ">=":
					opNode = new opNodeGreatEq(left, right)
					return opNode
					
				case "<<":
					opNode = new opNodeLeftShift(left, right)
					return opNode
					
				case ">>":
					opNode = new opNodeSignRightShift(left, right)
					return opNode
					
				case ">>>":
					opNode = new opNodeZeroRightShift(left, right)
					return opNode
                default:
                    throw "STOP: Here is an new Binary Expression You need to add on!!!!"
            }
            return
		
        /****************************************
            Logical Expression Cases
            
                &&, ||
        *****************************************/
		case "LogicalExpression":
    		opertor = node.operator
    		left = eval_node(node.left, env)
    		right = eval_node(node.right, env)

			switch (opertor){
				case "&&":
					// env.expPlus(left, right)
					opNode = new opNodeAnd(left, right)
					return opNode

				case "||":
					opNode = new opNodeOr(left, right)
					return opNode

				default:
					throw "STOP: Here is an new Logical Expression You need to add on!!!!"
					// return
			}
			return

        /****************************************
            Uniary Expression Cases
            
                +, -, ~, !, delete, void, typeof
        *****************************************/
        case "UnaryExpression":
            opertor = node.operator
            // left = eval_node(node.left, env)
            right = eval_node(node.right, env)

            switch (opertor){
                case "+":
                    opNode = new opNodeIncre(right)
                    return opNode

                case "-":
                    opNode = new opNodeDecre(right)
                    return opNode

                case "~":
                    opNode = new opNodeComple(right)
                    return opNode

                case "!":
                    opNode = new opNodeNot(right)
                    return opNode

                case "delete":
                    opNode = new opNodeDel(right)
                    return opNode

                case "void":
                    opNode = new opNodeVoid(right)
                    return opNode

                case "typeof":
                    opNode = new opNodeTypeOf(right)
                    return opNode

                default:
                    throw "STOP: Here is an new Unary Expression You need to add on!!!!"
                    // return
            }
            return

        case "Identifier":
            /************************************
                BUG: some identifiers as values, are NOT printed out
                    when environment is printed out b/c IDENTIFIER without
                    its own class and doesn't have getter Expression
            *************************************/
            varId = node.name
            return varId

        case "Literal":
            value = new leafNodeLiteral(node.value)
            return value
			
		case "CallExpression":
			callName = eval_node(node.callee, env)
            // Creating list to hold function call parameters
			var callArgs = [] // New list of arguments after eval_node
			var argList = node.arguments
            // For each iteration through each parameter within argument object
            argList.forEach(function (ele) {
                arg = eval_node(ele, env)
                // Pushing final value of parameter to list
                callArgs.push(arg);
            })

            // funcNode = new funcNodeRound(callName, callArgs)
            // console.log("\n------funcNode.Expression------\n" + funcNode.Expression)
            // console.log("\n------funcNode------\n" + funcNode)

            switch (callName){
                // CHANGE switch statement
                // Checking if callName is a function that is build in OR user declared
                // Create new symbolic value for userDeclared function (specified)
                // 
                case "round":
                    // env.expPlus(left, right)
                    funcNode = new funcNodeRound(callName, callArgs)
                    return funcNode

                case "eval":
                    funcNode = new funcNodeRound(callName, callArgs)
                    return funcNode

                case "require":
                    funcNode = new funcNodeRound(callName, callArgs)
                    return funcNode

                default:
                    console.log('\n-------------')
                    console.log("New function name: " + callName)
                    console.log("STOP: Here is an new Call Expression You need to add on!!!!")
                    // process.exit()
                    // return
            }            

			return

        case "MemberExpression":
            // Create new symbolic object for MemberExpression representation
            // 

            return;

        case "FunctionDeclaration":
            // First parsing all Function Declarations before parsing through rest of code
            // Build second dictionary with all USER DECLARED functions
            // Have KEY as function NAME, and VALUE as blockStatement content within function

            return;

        case "WhileStatement":
            conditional = eval_node(node.test, env)
            console.log('Conditional: ' + conditional)

            return;

        default:
            console.log('\n-------------')
            console.log("New case: " + ins_node + " At: " + node.loc.start.line)
            // console.log("!!!!!!!!\n")
            console.log("Hey! I don't Know!!!!!")
            console.log("Stop: need to add new case :)")
            // process.exit()

    }
}

ASTs.body.forEach(function (ele) {
    // console.log("#########################\n")
    // console.log(JSON.stringify(ele, null, 2))
    // console.log(typeof ele)
    // console.log(ele.type)
    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$")

    // eval_node(ele,env)

});

console.log("\n------Printing Environment------")
// console.log('getEnvironment getter function: \n')
// console.log(env.getEnvironment)
console.log('\nprintEnvironment function: ')
console.log(env.printEnvironment())
//console.log("###################\n")
// env.getVariable('lab')


console.log(JSON.stringify(ASTs, null, 2))
// console.log("#########################\n")
// console.log(typeof ASTs.body)