
let currentDepDivIndex = 0,
  divsDep = document.querySelectorAll(".container-projects .project")
maxDepo = divsDep.length;
let next = document.getElementById('next');
let back = document.getElementById('back');


next.addEventListener('click', () => {
    divsDep[currentDepDivIndex]
      .classList.remove("selected")
    console.log(currentDepDivIndex)
    currentDepDivIndex++;
  
    if (currentDepDivIndex >= maxDepo)
      currentDepDivIndex = 0
  
    divsDep[currentDepDivIndex]
      .classList.add("selected")
  })
  
  back.addEventListener('click', () => {
    divsDep[currentDepDivIndex]
      .classList.remove("selected")
  
    currentDepDivIndex--;
  
    if (currentDepDivIndex < 0)
      currentDepDivIndex = maxDepo - 1
  
    divsDep[currentDepDivIndex]
      .classList.add("selected")
  })