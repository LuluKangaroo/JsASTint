/***********************************
	Notes:

		Binary operations (+, -, *, /) not 'registered' when declared with var
		Case only works as AssignmentExpression(?), check back and include scenario
		of binary expressions within VariableDeclaration

************************************/

// var a = 111, b = 222
// a = 333
// b = 1000
/*var lab = 429
var school = "WSU"*/

// whatIf = anotherWord


/*******************************
	Testing Binary Operations
********************************/

// 	// Addition
// var sum = 0
// sum = 1 + 2
// var sum1 = 0
// sum1 = 3 + 4
// //
// // // 	// Subtraction
// var minus = 0
// minus = 2 - 1
// minus1 = 4 - 1

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

// boolean1 = 2
// //
// boolean2 = 1
//
// bin = boolean1 && boolean2
//
// bin2 = boolean1 || boolean2
//
// bin3 = 45 || 69
//
// // bin4 = true || false
//
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
if (test1 > 11) {
	test1 = 2

}
//
// else if(test1 < 11) {
	//test1 = 1

//}else if(false){
	//test1 = 0
// }

else {
	test1 = -1
}



/**************************
	Loop Tests
***************************/
	// While loop
// while(counter < 2){
// 	counter ++;
// }



/******************************
	Member Declaration Test
*******************************/
	// Examples taken from Shoptimate main.js
// var data = self.data
// var Request = require("request").Request;
// tabs.on('ready', function(tab){});



/******************************
	Block Statement Test
*******************************/

// function short(param) {
// 	var a = hello, c = ohNo;
// 	var single = 0;
// }


/*******************************
	Function Declaration Test
********************************/

	// Taken from realExampleTest/main.js
	// (main file for Shoptimate extension)

// function showNotification(worker, url) {
//     worker.port.emit("showNotification", {'url' : url});
// }

// showNotification(fakeWorker, fakeUrl)

// function generateNotificationUrl(site, sku) {
//     if (!site || !sku) {
//         return null;
//     }
//     // Create the iframe URL
//     var v = "1";
//     var country = "xx";
//     var locale = "xx";
//     return "http://toolbar.shoptimate.com/v" + v + "/" + country + "/" + locale + "/" + site + "/" + sku + "/firefox.html?extensionversion=" + getVersion();
// }




/*******************************
	Example Source Test
// ********************************/

	// function exportProfile() {
	// 	try {
	// 		var file = this.filePicker(
	// 			'modeSave',
	// 			this.getStringBundle().getString('exportProfile'),
	// 			this.getProfileLabel(this.getProfileIndex())+'.txt'
	// 		);
	// 		// if(file) {
	// 			var fos = Components.classes['@mozilla.org/network/file-output-stream;1'].
	// 									createInstance(Components.interfaces.nsIFileOutputStream);
	// 			fos.init(file, 0x02 | 0x08 | 0x20, 0664, 0); // write, create, truncate
    //
	// 			var os = Components.classes['@mozilla.org/intl/converter-output-stream;1']
	// 						.createInstance(Components.interfaces.nsIConverterOutputStream);
	// 			os.init(fos, 'UTF-8', 4096, Components.interfaces.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);
    //
	// 			var profileIndex = this.getProfileIndex();
	// 			this.writeProfile(os, profileIndex);
    //
	// 			os.close();
	// 			fos.close();
	// 		// }
	// 	} catch(e) {
	// 		this.log(e);
	// 	}
	// }


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