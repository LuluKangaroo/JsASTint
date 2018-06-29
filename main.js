/*************************
    Importing JS Files
**************************/
const ASTNode = require('./classes/ASTNode');
const onePathEnvironment = require('./classes/onePathEnvironment');
const leafNodeLiteral = require('./classes/leafNodeType/leafNodeLiteral');
const leafNodenumber = require('./classes/leafNodeType/leafNodenumber');

const opNodePlus = require('./classes/opNodeType/opNodePlus');
const opNodeMinus = require('./classes/opNodeType/opNodeMinus');
const opNodeMult = require('./classes/opNodeType/opNodeMult');
const opNodeDiv = require('./classes/opNodeType/opNodeDiv');
const opNodeAnd = require('./classes/opNodeType/opNodeAnd');
const opNodeOr = require('./classes/opNodeType/opNodeOr');
const opNodeInstance = require('./classes/opNodeType/opNodeInstance');
const opNodeMember = require('./classes/opNodeType/opNodeMember');
const opNodeBitOr = require('./classes/opNodeType/opNodeBitOr');
const opNodeGreat = require('./classes/opNodeType/opNodeGreat');
const opNodeLess = require('./classes/opNodeType/opNodeLess');

const blockStatementNode = require('./classes/blockStatementNode');
const catchClauseNode = require('./classes/catchClauseNode');
const tryStateNode = require('./classes/tryStateNode');

const expNodeAssignment = require('./classes/expNodeType/expNodeAssignment');
const sequenceExpNode = require('./classes/expNodeType/sequenceExpNode');

const funcNodeRound = require('./classes/funcNodeType/funcNoderound');

// var glob = require( 'glob' )
//   , path = require( 'path' );

// glob.sync( './classes/**/*.js' ).forEach( function( file ) {
//   require( path.resolve( file ) );
// });



/*********************
    Program Start
**********************/
// global array for user defined classes 
var userClass = [];
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

    if(node == null){
        return null
    }
    var ins_node = node.type

    switch (String(ins_node)) {
        case "VariableDeclaration":
            node.declarations.forEach(function (each_declarator){
                eval_node(each_declarator,env)
            });
            return

        case "VariableDeclarator":
            varName = eval_node(node.id, env)
            varVal = eval_node(node.init, env)
            env.setVariable(varName, varVal )
            return

        case "ExpressionStatement":
            expressState = eval_node(node.expression, env)
            return expressState

        case "AssignmentExpression":
            // varName = eval_node(node.left, env)
            _var = node.left

            var ins_subnode = _var.type

            if (ins_subnode == "Identifier"){
                varName = _var.name
            } else {
                console.log("\tHere is new case for Assignment cases")
                process.exit()
            }

            varExpr = eval_node(node.right, env)
            env.setVariable(varName, varExpr)


            assignExp = new expNodeAssignment(varName, varExpr)
            return assignExp

        case "SequenceExpression":
            var expStates = node.expressions;
            var expArray = [];

            expStates.forEach(function (ele){
                oneExp = eval_node(ele, env)
                expArray.push(oneExp)
            })
            
            seqNode = new sequenceExpNode(expArray)
            return seqNode

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

        case "BlockStatement":
                // ISSUE: Need to return types of objects to add the lines
                //      of statements to a list for the BlockStatement body
                // Objects that need creating: ASSIGNMENT EXPRESSION,
                //     SequenceExpression (CREATE new case for this :c )
                //     VariableDeclaration (object should use ARRAY to store declarations)

            var statementLines = []
            var listOfLines = node.body

            listOfLines.forEach(function (ele) {
                // console.log("\nele: ", ele);
                singleStatement = eval_node(ele, env)
                console.log("\nStatement type: ", typeof singleStatement)
                statementLines.push(singleStatement);
            })

            console.log("Printing statementLines")
            for (var i = 0; i < statementLines.length; i++) {
                console.log(statementLines[i]);
            }

            return;

        case "Identifier":
            /************************************
                BUG: some identifiers as values, are NOT printed out
                    when environment is printed out b/c IDENTIFIER without
                    its own class and doesn't have getter Expression
            *************************************/
            varId = node.name

            result = env.getVariable(varId)

            return result

        case "Literal":
            var val = node.value
            val_type = typeof(val)
            // console.log(val_type)

            switch (val_type){
                case "string":
                    value = new leafNodeString(val)
                    return value

                case "number":
                    value = new leafNodenumber(val)
                    return value

                case "boolean":
                    value = new leafNodeBoolean(val)
                    return value

                default:
                    console.log("\tIn the Literal case, you need an update for lieral type!\n")
                    process.exit()
            }
            return
			
		case "CallExpression":
			callName = eval_node(node.callee, env)

			// if the call name is a user defined function:
			// if userClass.includes(callName) {
			// 	console.log("HEY! It's a user-defined function!")
			// }

            // Creating list to hold function call parameters
			var callArgs = [] // New list of arguments after eval_node
			var argList = node.arguments
            // For each iteration through each parameter within argument object
            argList.forEach(function (ele) {
                arg = eval_node(ele, env)
                // Pushing final value of parameter to list
                callArgs.push(arg);
            })

            switch (callName){
                // CHANGE switch statement
                // Checking if callName is a function that is built in OR user declared
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
                    console.log("\nNew function name: " + callName+ " At: " + node.loc.start.line)
                    // console.log("STOP: Here is an new Call Expression You need to add on!!!!")
                    // process.exit()
                    // return
            }            

                    funcNode = new funcNodeRound(callName, callArgs)
			return funcNode

        case "MemberExpression":
            // Create new symbolic object for MemberExpression representation
            object = eval_node(node.object, env);
            property = eval_node(node.property, env);

            // console.log("\nObject type print: " + typeof object)
            // console.log("Object print: " + object)
            // console.log("Property type print: " + typeof property)
            // console.log("Property print: " + property)

            memberObject = new opNodeMember(object, property)
            // console.log("\nMember object: ", JSON.stringify(memberObject, null, 2))
            return memberObject;


        case "ThisExpression":
            return "this";

        case "FunctionDeclaration":
            // First parsing all Function Declarations before parsing through rest of code
            // Build second dictionary with all USER DECLARED functions
			var id = node.id
			userClass.push(id)
            // Have KEY as function NAME, and VALUE as blockStatement content within function

            // id = eval_node(node.id, env)
            // funcParams = eval_node(node.params, env)
            funcBody = eval_node(node.body, env)


            // Creating new local environment to hold body within functionDeclaration
            //  Pass local environment into functionBody
            //  Output the funciton's return value
            //  Later to send the returned value into somewhere lel


            return;

        case "TryStatement":
            var tryBlock = eval_node(node.block, env)
            var catchHand = eval_node(node.handler, env)
            var final = eval_node(node.finalizer, env)

            var tryNode = new tryStateNode(tryBlock, catchHand, final)
            console.log("======= try statement ======")
            console.log(tryNode)
            console.log("============================")
            return tryNode;

        case "CatchClause":
            var paramCase = eval_node(node.param, env)
            var blockBody = eval_node(node.body, env)

            var catchNode = new catchClauseNode(paramCase, blockBody)
            return catchNode;

        case "WhileStatement":
            conditional = eval_node(node.test, env)
            console.log('Conditional: ' + conditional)

            return;

        // ==========================
        //  If Statement
        //      Evaluation of ONLY the if branch, assumption that there is no alternative
        case "IfStatement":
            console.log("=== If Statement ===")
            var conditional = eval_node(node.test, env)
            console.log('\nConditional: ', conditional)
            var consBlock = eval_node(node.consequent, env)
            console.log('\nConsequent: ', consBlock)

            var alt = eval_node(node.alternate, env)
            console.log('\nAlternate: ', alt)

            return;

        default:
            console.log('\n-------------')
            console.log("\nNew case to add: " + ins_node + " At: " + node.loc.start.line)
            // console.log("!!!!!!!!\n")
            // console.log("Hey! I don't Know!!!!!")
            // console.log("Stop: need to add new case :)")
            // process.exit()

    }
}

// Creating unknown node to deal with new and foreign functions


ASTsWithLoc.body.forEach(function (ele) {
    // console.log("#########################\n")
    // console.log(JSON.stringify(ele, null, 2))
    // console.log(typeof ele)
    // console.log(ele.type)
    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$")

    eval_node(ele,env)

});


ASTs.body.forEach(function (ele) {
    // eval_node(ele,env)

});


// console.log("-------- Generated AST --------")
// console.log(JSON.stringify(ASTs, null, 2))


// console.log("\n------Printing Environment------")
// console.log(env.printEnvironment())
