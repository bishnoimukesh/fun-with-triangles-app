const inputs = document.querySelectorAll('.angle-input');

const isTriangleBtn = document.querySelector('#is-triangle-btn');
const output = document.querySelector('#output');

isTriangleBtn.addEventListener('click',function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value) );
    if(sumOfAngles === 180){
        output.innerText = "YAY, angles form a trianlge";
    }
    else{
        output.innerText = "OH NO, Not form a trianlge";
    }
})

function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    return sumOfAngles;
}