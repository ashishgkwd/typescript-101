// Boolean variable
var isWeekend = true;
// Number variable. Similar to JavaScript all are floating point values
var year = 2018;
// String variable
var today = "Monday";
// String Array variable. Can also be invoked as 'Array<stirng>'
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// Tuple declaration. Fixed length array with mulitple type support
var shortDate = [today, 5, year];
// Enum declaration. Default index starts with 0
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yellow"] = 1] = "Yellow";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var index = Color.Red; // enum index access
var value = Color[index]; // enum value access
// Any type declaration. Supports all data types. Can be used for array declaration also.
var response = "Not sure of the value type";
// Void type. No or Empty return value. Most commonly used for method return types.
function logError(errorMessage) {
    console.error("ERROR: " + errorMessage);
}
// Null & Undefined declaration. Can be assigned to all other types and references.
var token = null; // Empty or non-existent value. Explicitly means nothing
var future = undefined; // Variable is declared but not initialized
// Never type declaration. Explicit type for never returning functions
function throwError() {
    throw new Error("some error message");
}
// Attempt to reassign with wrong data types should result in tsc compilaton errors.
//isWeekend = "true";
