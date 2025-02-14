const studentFullName="Karthik Jeeja Sudhakar";
const studentNumber= 1200999;
const result= `${studentFullName}-${studentNumber}`;
console.log(result);
const headerContent=document.querySelector("h1");
console.log(headerContent.textContent);
headerContent.textContent=result;
headerContent.classList.add("headingPrimary");

