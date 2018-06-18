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
        var str = 'Environment: /n'
        var keys = Object.keys(this._env)
        var values = Object.values(this._env)
        keys.forEach(function (ele){
            console.log(ele)
        });

        for ( var prop in this._env ) {
           if ( this._env.hasOwnProperty( prop ) ) {
               alert( this._env[prop] )
           }
        }

        this._env.forEach(function (ele){
            console.log(ele)
            // str += ele. + []
        })
        // this._env.forEach(KeyValuePair)
        return this._env
    }

};

module.exports = onePathEnvironment;
