const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const mobileNav = document.querySelector('.mobile-nav');

function showModal(show = true) {
  if (show) {
    [backdrop, modal].forEach(element => { if (element) { element.classList.add("open"); } });
  } else {
    [backdrop, modal, mobileNav].forEach(element => { if (element) { element.classList.remove("open"); } });
  }
}

document
  .querySelectorAll(".plan button")
  .forEach(button => button.addEventListener("click", () => showModal()));

[document.querySelector(".modal__action--negative"), backdrop]
  .forEach(element => { if (element) { element.addEventListener("click", () => showModal(false)) } });

document
  .querySelector('.toggle-button')
  .addEventListener("click", () => {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");
  });