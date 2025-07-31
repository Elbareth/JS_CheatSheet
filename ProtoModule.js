//We can create the class as a module
//We can hide some part of the code
//And export methods we want
const myModuleClass = (function()
{
    const myPrivateFunction = () => console.log("I am private function");
    const functionThatUsePrivateFunction = () => {
        console.log("I use the private function inside ");
        myPrivateFunction();
    };
    const myPublicFunction = () => console.log("I am public function");
    return {functionThatUsePrivateFunction, myPublicFunction};
}());
myModuleClass.functionThatUsePrivateFunction();
myModuleClass.myPublicFunction();
//And I cannot use private function
