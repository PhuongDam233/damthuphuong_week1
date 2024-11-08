// Open Accordion
function handleAccordion() {
  const accordions = document.querySelectorAll(".accordion__list-item");

  accordions.forEach((item, index) => {
    let answer = item.querySelector(".answer");
    item.addEventListener("click", () => {
      item.classList.toggle("--active");
      // cách 1 : display = none
      // if (answer.style.display === "block") {
      //   answer.style.display = "none";
      // } else {
      //   answer.style.display = "block";
      // }
      // cách 2: set maxheight
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
      removeActive(index);
    });
  });
  function removeActive(index1) {
    accordions.forEach((item2, index2) => {
      let answer = item2.querySelector(".answer");
      if (index1 != index2) {
        item2.classList.remove("--active");
        answer.style.maxHeight = null;
      }
    });
  }
}
handleAccordion();
