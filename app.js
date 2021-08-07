const dobInput = document.querySelector("#dob");
const luckyInput = document.querySelector("#lucky");
const form = document.querySelector("#form");
const btn = document.querySelector(".btn");

form.addEventListener("submit", function onSubmit(e) {
  e.preventDefault();

  const vanillaDOB = dobInput.value.replaceAll("-", "");

  console.log(vanillaDOB);

  vanillaDOB = Number(vanillaDOB);
});
