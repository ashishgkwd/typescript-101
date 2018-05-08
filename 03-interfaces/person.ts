
/* Interface definition
   Important to remember that typescript interfaces are defined by the object shape.
   Hence interface Person == Human if the properties and method signatures match. 
*/
interface Person {
    name: string;
    city: string;

    // ? can be suffixed for optional members
    address?: string;

    /* 
    // read only property 
    readonly age:number; 
    /**/

    // method definition with optionals
    greet(name: string): string;
    rest?(): void;
}

// Interface extending from other interfaces
/*
interface Athlete extends Person {
    sport:string;
    wins:number;
    play():void;
}
/**/

const person: Person = {
    name: "John", city: "Tokyo",
    greet(name: string): string {
        return `${this.name} says: Hello ${name}`;
    }
};

function welcome(person: Person) {
    console.log(`Hello ${person.name} from ${person.city}`);
    console.log(person.greet("Ashish"));
}

welcome(person);


/*  Interface extending from other classes.
    In such cases only member definitions will be inherited and not the implementations
*/
class Control {
    isEnabled:boolean = false;
    toggle():boolean{
        this.isEnabled = !this.isEnabled;
        console.log("control is " + this.isEnabled);
        return this.isEnabled;
    }
}

interface Checkbox extends Control {
    isChecked:boolean;
    label:string;
}

// throws error due to missing properties from Control class
// const c:Checkbox = {isChecked:false, label:"Cash on Delivery"};