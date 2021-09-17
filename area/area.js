const inputs = document.querySelectorAll(".input-area");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");

areaBtn.addEventListener("click", calculateArea);

function multiplication(base, height){
    const multipliedOutput = base * height;
    return multipliedOutput;
}

function calculateArea(){
    const baseAndHeight = multiplication(inputs[0].value, inputs[1].value);
    const area = baseAndHeight / 2;
    console.log({area});
    output.innerText = "The area of the triangle is " + area + " cm^2" ;
}

