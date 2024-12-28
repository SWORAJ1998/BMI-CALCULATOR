function calculate(){
    let feet=document.getElementById('feet').value
    let inch=document.getElementById('inch').value
    let weight=document.getElementById('weight').value
    feet=parseInt(feet)
    inch=parseInt(inch)
    weight=parseFloat(weight)
 let height=((feet*12)+inch)*0.0254;
 let bmi= weight/(height*height);
 let h1=document.getElementById('result')
 h1.innerHTML= "value:" +bmi;
 let h2 =document.getElementById("category")
 if (bmi < 18.5) {
    h2.innerHTML = "you are Underweight";
 } else if (bmi >= 18.5 && bmi < 24.9) {
    h2.innerHTML = "you are Normal weight";
 } else if (bmi >= 25 && bmi < 29.9) {
    h2.innerHTML = "you are  Overweight";
 } else {
    h2.innerHTML = "Obese";
 }
}