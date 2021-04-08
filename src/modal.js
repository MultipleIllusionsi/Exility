const closeIcon = document.getElementById("close-modal");
const openIcon = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const modalLinks = document.getElementById("modal-links");

openIcon.addEventListener("click", () => {
  modal.classList.add("modal--open");
  document.body.style.overflow = "hidden";
});

closeIcon.addEventListener("click", () => {
  modal.classList.remove("modal--open");
  document.body.style.overflow = "auto";
});

modalLinks.addEventListener("click", (event) => {
  if (event.currentTarget === event.target) return;
  modal.classList.remove("modal--open");
  document.body.style.overflow = "auto";
});
