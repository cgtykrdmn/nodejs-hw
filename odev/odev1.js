const pi = Math.PI;
let givenDia = process.argv.slice(2)

function callArea(diameter){

    let area = pi*diameter*diameter;
    console.log("Diameter: " + diameter);
    console.log("Area: "  + area);

}
callArea(givenDia);