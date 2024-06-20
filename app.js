const accordions = document.querySelectorAll(".accordion");
const accordionToggle = document.querySelectorAll(".accordion__toggle");
const accordionContent = document.querySelectorAll(".accordion__content");
const toggleIcon = document.querySelectorAll(".accordion__toggle-icon");

for (let i = 0; i < accordions.length; i++) {
  accordionToggle[i].addEventListener("click", () => {
    accordionContent[i].classList.toggle("content-show");
    if (accordionContent[i].classList.contains("content-show")) {
      toggleIcon[i].textContent = "-";
    } else {
      toggleIcon[i].textContent = "+";
    }
  });
}
