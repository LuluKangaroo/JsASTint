class opNodeInstance {
    constructor(left, right){
        this._left = left
        this._right = right
    }

    get Expression(){
        return "Op node instanceOf: ("this._left.Expression + ", " + this._right.Expression + ")"
    }
};
module.exports = opNodeInstance;