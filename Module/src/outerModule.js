//'use strict'
export function iWantToExportThisFunction()
{
    console.log("I am exported function");
}
function exportFunction1()
{
    console.log("Export function 1");
}
function exportFunction2()
{
    console.log("Export function 2");
}
function exportFunction3()
{
    console.log("Export function 3");
}
function doNotExportThis()
{
    console.log("I am NOT exporting this!");
}
export {exportFunction1, exportFunction2, exportFunction3};