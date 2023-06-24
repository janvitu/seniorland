let faqSection = document.getElementById("faqs");
let faqBtns = faqSection.querySelectorAll("button");

faqBtns.forEach((faqBtn) => {
  faqBtn.addEventListener("click", (event) => {
    const isExpanded = faqBtn.getAttribute("aria-expanded") === "true";
    if (isExpanded) {
      faqBtn.setAttribute("aria-expanded", !isExpanded);
      closeAcordion(faqBtn.getAttribute("aria-controls"), event.currentTarget);
    } else {
      faqBtn.setAttribute("aria-expanded", !isExpanded);
      openAcordion(faqBtn.getAttribute("aria-controls"), event.currentTarget);
    }
  });
});

function closeAcordion(contentElementID, target) {
  const faqContentElement = document.getElementById(contentElementID);
  const chevron = target.querySelector("svg");
  chevron.style.rotate = "-90deg";
  faqContentElement.style.maxHeight = null;
}

function openAcordion(contentElementID, target) {
  const faqContentElement = document.getElementById(contentElementID);
  const chevron = target.querySelector("svg");
  chevron.style.rotate = null;
  faqContentElement.style.maxHeight = `${faqContentElement.scrollHeight}px`;
}
