var Utility;
(function (Utility) {
    var Fees;
    (function (Fees) {
        function calculateLateFee(daysLate) {
            return daysLate * 0.25;
        }
        Fees.calculateLateFee = calculateLateFee;
    })(Fees = Utility.Fees || (Utility.Fees = {}));
    function maxBooksAllowed(age) {
        return (age < 12) ? 3 : 10;
    }
    Utility.maxBooksAllowed = maxBooksAllowed;
    function privateFunc(message) {
        console.log('This is private');
    }
})(Utility || (Utility = {}));
/// <reference path="utility-functions.ts" />
var resultU = Utility.maxBooksAllowed(3);
console.log(resultU);
var util = Utility.Fees;
resultU = util.calculateLateFee(30);
console.log(resultU);
