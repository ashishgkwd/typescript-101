// Interface extending from other interfaces
/*
interface Athlete extends Person {
    sport:string;
    wins:number;
    play():void;
}
/**/
var person = {
    name: "John", city: "Tokyo",
    greet: function (name) {
        return this.name + " says: Hello " + name;
    }
};
function welcome(person) {
    console.log("Hello " + person.name + " from " + person.city);
    console.log(person.greet("Ashish"));
}
welcome(person);
/*  Interface extending from other classes.
    In such cases only member definitions will be inherited and not the implementations
*/
var Control = /** @class */ (function () {
    function Control() {
        this.isEnabled = false;
    }
    Control.prototype.toggle = function () {
        this.isEnabled = !this.isEnabled;
        console.log("control is " + this.isEnabled);
        return this.isEnabled;
    };
    return Control;
}());
// throws error due to missing properties from Control class
// const c:Checkbox = {isChecked:false, label:"Cash on Delivery"};
