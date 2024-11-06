var Dateclass = /** @class */ (function () {
    function Dateclass() {
    }
    Dateclass.prototype.getTime = function () {
        return 1;
    };
    return Dateclass;
}());
var dateObject = new Dateclass();
var getTime = dateObject.getTime();
console.log(getTime);
