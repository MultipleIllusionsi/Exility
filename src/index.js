import "./scss/main.scss";

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const sliderWrapper = document.getElementById("slider");

const getCardItemDimensions = () => {
  const advantagesItem = document.getElementsByClassName(
    "advantages__cards__item"
  )[0];
  const advantagesItemStyles = window.getComputedStyle(advantagesItem);
  const itemOffset =
    Number(advantagesItemStyles.marginRight.replace(/[^-\d.]/g, "")) +
    Number(advantagesItemStyles.width.replace(/[^-\d.]/g, ""));

  return itemOffset;
};

const itemOffset = getCardItemDimensions();

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
