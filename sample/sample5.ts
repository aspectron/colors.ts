require('../lib/colors');

let ts = `class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(greeter.greet());
}

document.body.appendChild(button);
`;

console.log(ts.paint([
    {key:["let", "new", "alert", "class"], colors:"red"},
    {key:"this", colors:"brightgreen"},
    {key:"return", colors:"green"},
    {key:"document", colors:"green"},
    {key:new RegExp("string|number|function", "g"), colors:["#6600FF", "bold"]},
    {key:new RegExp("\\{|\\}", "g"), colors:"bold"},
    {key:new RegExp("\\(|\\)", "g"), colors:"bold"},
    {key:[/"[^"]*"/g, /'[^']*'/g], colors:["brightyellow", "underline"]},
]))
