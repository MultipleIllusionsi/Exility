const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const sliderWrapper = document.getElementById("slider");

const _getCardItemDimensions = () => {
  const advantagesItem = document.getElementsByClassName(
    "advantages__cards__item"
  )[0];
  const advantagesItemStyles = window.getComputedStyle(advantagesItem);
  const itemOffset =
    Number(advantagesItemStyles.marginRight.replace(/[^-\d.]/g, "")) +
    Number(advantagesItemStyles.width.replace(/[^-\d.]/g, ""));

  return itemOffset;
};

const itemOffset = _getCardItemDimensions();

let position = 0;

rightArrow.addEventListener("click", () => {
  if (position === 1) return;
  const coord = sliderWrapper.style.transform.replace(/[^-\d.]/g, "");
  sliderWrapper.style.transform = `translateX(${Number(coord) - itemOffset}px)`;

  position++;
});

leftArrow.addEventListener("click", () => {
  if (position === 0) return;
  const coord = sliderWrapper.style.transform.replace(/[^-\d.]/g, "");
  sliderWrapper.style.transform = `translateX(${Number(coord) + itemOffset}px)`;

  position--;
});

// recalculate on resize
window.addEventListener("resize", _getCardItemDimensions, false);
// recalculate on dom load
document.addEventListener("DOMContentLoaded", _getCardItemDimensions, false);
// recalculate on load (assets loaded as well)
window.addEventListener("load", _getCardItemDimensions);
