class opNodeInstance {
    constructor(left, right){
        this._left = left
        this._right = right
    }

    get Expression(){
        return this._left.Expression() + "instanceof" + this._right.Expression()
    }
};
module.exports = opNodeInstance;