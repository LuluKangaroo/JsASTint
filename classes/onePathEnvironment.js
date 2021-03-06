class onePathEnvironment{
    constructor(){
        this._env = {}
    }

    setVariable(varName, varValue){
        this._env[varName] = varValue

    }

    printEnvironment(){
        console.log('\n===== Environment =====\n')

        for (var key in this._env) {
            // check if the property/key is defined in the object itself, not in parent
            if (this._env.hasOwnProperty(key)) {
                var value = this._env[key]
                console.log(key + ":", value.Expression, "\n");
                // console.log("Content :", value.Content, "\n");
            }
        }
        console.log("=======================\n")
    }

    getVariable(varName){
        // console.log(this._env[varName])
        return this._env[varName]
    }

    getTable(varName){
        var info = this._env[varName]
        console.log(typeof info)
        return info
    }

    get getEnvironment(){
        // var str = 'Environment: \n'

        // console.log("\n------getEnvironment function start------")
        // for (var key in this._env) {
        //     // check if the property/key is defined in the object itself, not in parent
        //     if (this._env.hasOwnProperty(key)) {    
        //         console.log(key, this._env[key]);
        //     }
        // }
        // console.log("------getEnvironment function end------\n")

        return this._env
    }

};

module.exports = onePathEnvironment;
