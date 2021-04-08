import debounce from "./debouce";

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const sliderWrapper = document.getElementById("slider");

const getNumFromCssProp = (prop) => Number(prop.replace(/[^-\d.]/g, ""));

const _getCardItemDimensions = () => {
  const sliderCardItem = window.getComputedStyle(
    sliderWrapper.firstElementChild
  );
  const itemOffset =
    getNumFromCssProp(sliderCardItem.marginRight) +
    getNumFromCssProp(sliderCardItem.width);
  return itemOffset;
};

const resetSlider = debounce(() => {
  // Сюда впилить логику: определяем позицию и потом по ней ровняем translate
  position = 0;
  sliderWrapper.style.transform = `translateX(0px)`;
}, 250);

let position = 0;

const getAllowedTranslates = () => {
  const windowWidth = window.innerWidth;
  if (windowWidth < 550) return 3;
  if (windowWidth < 1300) return 2;
  return 1;
};

leftArrow.addEventListener("click", () => {
  const itemOffset = _getCardItemDimensions();
  if (position === 0) return;
  const coord = sliderWrapper.style.transform.replace(/[^-\d.]/g, "");
  sliderWrapper.style.transform = `translateX(${Number(coord) + itemOffset}px)`;

  position--;
});

rightArrow.addEventListener("click", () => {
  const itemOffset = _getCardItemDimensions();
  if (position === getAllowedTranslates()) return;
  const coord = getNumFromCssProp(sliderWrapper.style.transform);
  sliderWrapper.style.transform = `translateX(${coord - itemOffset}px)`;

  position++;
});

document.addEventListener("DOMContentLoaded", _getCardItemDimensions, false);
window.addEventListener("load", _getCardItemDimensions);
window.addEventListener("resize", resetSlider);
