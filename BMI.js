const form = document.querySelector('form');


// Add submit event listener
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
let BMI;
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide');

  // Validate height input
  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height. You entered: ${height}`;
    return; // Exit the function early if invalid
  } else if(weight<=0|| weight==" "){
     results.innerHTML=`please enter the valid weight, you enter ${weight} `
  }else{
    //  let BMI=Math.round(weight/((height*height)/10000));
     BMI=(weight/((height*height)/10000)).toFixed(2);
     results.innerHTML=BMI;
  }

  if(BMI<18.6){
      guide.innerHTML="Your are Under weight";
  }else if((BMI>18.6) && (BMI<24.9)){
    guide.innerHTML="Your are in Normal Range";
  }
  else{
    guide.innerHTML= "You are Overweight"
  }
  




});
