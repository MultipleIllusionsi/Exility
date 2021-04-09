const formContent = document.getElementById("form-content");
const nameForm = document.getElementById("form-name");
const phoneForm = document.getElementById("form-tel");
const messageForm = document.getElementById("form-message");

const successMessage = document.getElementById("success-message");
const sendButton = document.getElementById("send-message");

sendButton.addEventListener("click", () => {
  if (sendButton.getAttribute("sent") === "true") {
    successMessage.classList.remove("success-send");
    formContent.style.visibility = "visible";
    sendButton.firstElementChild.textContent = "Отправить заявку";
    sendButton.setAttribute("sent", false);
    return;
  }

  nameForm.value = "";
  phoneForm.value = "";
  messageForm.value = "";
  sendButton.setAttribute("sent", true);
  sendButton.firstElementChild.textContent = "Отправить еще раз";
  formContent.style.visibility = "hidden";
  successMessage.classList.add("success-send");
});
