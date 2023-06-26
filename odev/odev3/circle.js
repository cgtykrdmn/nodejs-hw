function circleArea(pi, r) {
    let area = pi*r*r;
    console.log("Circle Area: " + area);
}

function circleCircumference(pi, r){
    let circumference = 2*pi*r;
    console.log("Circle Circumference: " + circumference);
}

module.exports = {
    circleArea,
    circleCircumference
}