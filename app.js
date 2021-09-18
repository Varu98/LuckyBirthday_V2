const dobInput = document.querySelector("#dob");
const luckyInput = document.querySelector("#lucky");
const form = document.querySelector("#form");
const btn = document.querySelector(".btn");
const agreeDiv = document.querySelector(".agree-div");
const disagreeDiv = document.querySelector(".disagree-div");

// added an event listener that will play the onSubmit function when ubmit event is generated.

form.addEventListener("submit", function onSubmit(e) {
  e.preventDefault();

  // the date is recieved in string format  with hyphens so in order to perform mathematical operations on the data we need to format it in number type and remove hyphens

  let vanillaDOB = dobInput.value.replaceAll("-", "");

  console.log(vanillaDOB);

  //to add elements inside array we initialise a counter

  // then add this counter to the array index such that the number being added gets fed in the counter and the previous value is fed into counter statement to be added again as the loop progresses

  let counter = 0;
  for (value of vanillaDOB) {
    counter = counter + Number(value);
    console.log(counter);
  }
  if (counter % Number(luckyInput.value)) {
    disagreeDiv.style.display = "block";
    agreeDiv.style.display = "none";
  } else {  
    agreeDiv.style.display = "block";
    disagreeDiv.style.display = "none";
  }
});
