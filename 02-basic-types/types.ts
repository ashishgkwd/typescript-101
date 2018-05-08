
// Boolean variable
let isWeekend:boolean = true;

// Number variable. Similar to JavaScript all are floating point values
let year:number = 2018;

// String variable
let today:string = "Monday";

// String Array variable. Can also be invoked as 'Array<stirng>'
let days:string[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Tuple declaration. Fixed length array with mulitple type support
let shortDate:[string, number, number] = [today, 5, year];

// Enum declaration. Default index starts with 0
enum Color {"Red", "Yellow", "Green"};
let index:Color = Color.Red;        // enum index access
let value:string = Color[index];     // enum value access

// Any type declaration. Supports all data types. Can be used for array declaration also.
let response:any = "Not sure of the value type";

// Void type. No or Empty return value. Most commonly used for method return types.
function logError(errorMessage):void {
    console.error("ERROR: " + errorMessage);
}

// Null & Undefined declaration. Can be assigned to all other types and references.
let token:null = null;              // Empty or non-existent value. Explicitly means nothing
let future:undefined = undefined;   // Variable is declared but not initialized

// Never type declaration. Explicit type for never returning functions
function throwError():never {
    throw new Error("some error message");
}

// Attempt to reassign with wrong data types should result in tsc compilaton errors.
//isWeekend = "true";