//'use strict'
//could be useful to name this file name.mjs - > modular js
import nameIsNotImportant from "./outerModuleOnlyOneFile.js"; //export default - in this case the name does not matter!
import {exportFunction3} from "./outerModule.js"; //export one of the modules - in this context the name matters!
//If we use import * as alias from ${MODULE} - it means that we import ALL functions from the module
import {exportFunction2 as alias} from "./outerModule.js"; //We can use alias to rename the function within this file
import {default as anotherFunction, anotherFunctionToImportNotDefault} from "./outerModuleOnlyOneAnotherFile.js" //If we want to rename default function in this context, we have to use default keyword
import someName, {someFunction} from "./outerModuleOnlyOneFileAnotherOne.js"; //it means the same as line above
export {exportFunction1} from "./outerModule.js"; //We import and immediately export the function. If another module will import this one, it could import this module directly
//We can import the function using Promise
//import("./someModule.js").then(do => do.sth()); - ES2020
let variableWithModuleName = "asyncModule.js";
import("./"+variableWithModuleName).then(it => {console.log(it);}); //we can import the module dynamically - using variables

nameIsNotImportant();
exportFunction3();
alias();
anotherFunction();
someName();
console.log(import.meta); //metadata about the current module