// import onePathEnvironment from "./classes/onePathEnvironment";
// const onePathEnvironment = require('./classes/*');
// imported.src = 'classes/onePathEnvironment'
// require("classes/onePathEnvironment")
class onePathEnvironment{
    constructor(){
        this._env = {}
    }

    setVariable(varName, varValue){
        this._env[varName] = varValue

    }

    getVariable(varName){
        console.log(this._env[varName])
    }

    get getEnvironment(){
        return this._env
    }
}

class leafNodeLiteral {
    constructor(value){
        this._val = value
    }

    get Expression(){
        return this._val + "Literal"
    }
}

class opNodePlus {
    constructor(left, right){
        this._left = left
        this._right = right
    }

    get Expression(){
        return this._left.Expression() + this._right.Expression()
    }
}

var val = "JIn Huang"
var fs = require('fs');
var fileName = process.argv[2];
var srcCode = fs.readFileSync(fileName, 'utf-8');
var esprima = require('esprima');
var program = 'const answer = 42';

var ASTs = esprima.parseScript(srcCode);

var env = new onePathEnvironment()

function eval_node(node, env) {
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
            console.log(varName)
            console.log(varVal)
            // throw "die Here!"
            env.setVariable(varName, varVal)
            return

        case "BinaryExpression":
            opertor = node.operator
            left = eval_node(node.left, env)
            right = eval_node(node.right, env)

            switch (opertor){
                case "+":
                    // env.expPlus(left, right)
                    opNode = new opNodePlus(left, right)
                    return opNode
                default:
                    throw "STOP: Here is an new Binary Expression You need to add on!!!!"
                    // return

            }
            return

        case "Identifier":
            varId = node.name
            // console.log(variable + "=")
            // console.log("case3\n")
            return varId

        case "Literal":
            value = new leafNodeLiteral(node.value)
            return value

        default:
            console.log(ins_node)
            // console.log("!!!!!!!!\n")
            console.log("Hey! I don't Know!!!!!")

    }
}

ASTs.body.forEach(function (ele) {
    // console.log("#########################\n")
    // console.log(JSON.stringify(ele, null, 2))
    // console.log(typeof ele)
    // console.log(ele.type)
    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$")

    eval_node(ele,env)

});

console.log(env.getEnvironment)
console.log("###################\n")
// env.getVariable('lab')


// console.log(JSON.stringify(ASTs, null, 2))
// console.log("#########################\n")
// console.log(typeof ASTs.body)