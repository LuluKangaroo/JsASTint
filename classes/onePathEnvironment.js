class onePathEnvironment{
    constructor(){
        this._env = {}
    }

    setVariable(varName, varValue){
        this._env[varName] = varValue

    }

    get getVariable(){
        console.log(this._env[varName])
    }

    get getEnvironment(){
        // this._env.forEach(KeyValuePair)
        return this._env
    }

};

module.exports = onePathEnvironment;
