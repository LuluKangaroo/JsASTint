/***********************************
	Notes:

		Binary operations (+, -, *, /) not 'registered' when declared with var
		Case only works as AssignmentExpression(?), check back and include scenario
		of binary expressions within VariableDeclaration

************************************/

// var a = "Jin Huang", b = "Yu Li"
// var lab = 429
// var school = "WSU"

// whatIf = anotherWord


/*******************************
	Testing Binary Operations
********************************/

// 	// Addition
// var sum = 0
// var sum = 1 + 2
// sum = 3 + 4

// 	// Subtraction
// var minus = 0
// var minus = 2 - 1
// minus = 4 - 1

// 	// Multiplication
// var mult = 3 * 2
// mult = 3 * 2

	// Division
// var div = 0
// var divide = 6 / 3
// divide = 6 / 3



/*********************************
	Testing Logical Operations
**********************************/

// boolean1 = true

// boolean2 = false

// bin = boolean1 && boolean2

// bin2 = boolean1 || boolean2

// bin3 = 45 || 69

// bin4 = true || false

// bin5 = b || a



/******************************
	Testing Unary Operations
*******************************/

// bin = !(boolean1)
// bin2 = !boolean2



/*************************************
	Testing Conditional Statements
**************************************/

	// Greater than
//if (test1 > 11) {
	//test1 = 2

//}else if(test1 < 11) {
	//test1 = 1

//}else if(false){
	//test1 = 0
//}else {
	//test1 = -1
//}



/**************************
	Loop Tests
***************************/
	// While loop
// while(counter < 2){
// 	counter ++;
// }



/*******************************
	Function Declaration Test
********************************/

	// Taken from realExampleTest/main.js
	// (main file for Shoptimate extension)
function generateNotificationUrl(site, sku) {
    if (!site || !sku) {
        return null;
    }
    // Create the iframe URL
    var v = "1";
    var country = "xx";
    var locale = "xx";
    return "http://toolbar.shoptimate.com/v" + v + "/" + country + "/" + locale + "/" + site + "/" + sku + "/firefox.html?extensionversion=" + getVersion();
}




/**************************
	Miscellaneous Tests
***************************/
// a = math(0.8, 234, 34, 34);
// b = round(0.8);
// c = eval("string");
// empty = null-

// var doub = 2.5

// var dict = {}
// dict['key1'] = "Jin Huang"
// dict[1] = "jamie"
// dict['key100'] = "lu liu"

// console.log(dict)

// switch(a) {
//     case "Jin Huang":
//         console.log(a)
// }