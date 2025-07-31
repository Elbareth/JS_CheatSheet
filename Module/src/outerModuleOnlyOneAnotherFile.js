export default function iWantExportOnlyThisMethodAnother()
{
    console.log("I am another default method to export");
}
export function anotherFunctionToImportNotDefault()
{
    console.log("I will be imported but I am not default function");
}