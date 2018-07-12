class varInfo{
    constructor(content){
        this._val = content
        this._sensType = {
        	'bookmark' : false,
        	'url' : false,
        	'cookies' : false,
        	'usr' : false,
        	'pwd' : false,
        }
    }

    checkSensitivity(){
    	var stringed = this._val.Expression

    	if(stringed.includes('usr')){
    		this._sensType['usr'] = true
    	}
    	if(stringed.includes('pwd')){
    		this._sensType['pwd'] = true
    	}
    	if(stringed.includes('https://')){
    		this._sensType['url'] = true
    	}
    }

    isSensitive(){
    	for(var key in this._sensType){
    		if(this._sensType[key] == true){
    			console.log("\nSENSITIVE CONTENT INCLUDED.")
    			console.log("Type: ", key, "\n")
    		}
    	}
    }

    get Expression(){
    	var printContent = this._val.Expression
    	printContent += "\n\t=== Sensitivity ===\n"
        for(var key in this._sensType){
        	printContent += "\t" + key + ": "+  this._sensType[key] + "\n"
        }
    	return printContent
    }

};

module.exports = varInfo;
