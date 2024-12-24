function sendAjaxRequest() {
  const data = new URLSearchParams();
  const username =
    document.getElementById("username").value.trim() ||
    document.getElementById("username1").value.trim();
  const phone =
    document.getElementById("phone").value.trim() ||
    document.getElementById("phone1").value.trim();
  const message =
    document.getElementById("message").value.trim() ||
    document.getElementById("message1").value.trim();
  const errorMessageDiv = document.getElementById("error-message");
  const errorMessageDiv1 = document.getElementById("error-message1");

  errorMessageDiv.style.display = "none";
  errorMessageDiv.textContent = "";

  errorMessageDiv1.style.display = "none";
  errorMessageDiv1.textContent = "";

  if (username.length < 3) {
    errorMessageDiv.textContent =
      "Имя пользователя должно содержать минимум 3 буквы.";
    errorMessageDiv.style.display = "block";

    errorMessageDiv1.textContent =
      "Имя пользователя должно содержать минимум 3 буквы.";
    errorMessageDiv1.style.display = "block";
    return;
  }

  const phonePattern = /^\+375[-\s]?\d{2}[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;

  if (!phonePattern.test(phone)) {
    errorMessageDiv.textContent =
      "Неправильный формат телефона. Используйте формат: +375-xx-xxx-xx-xx";
    errorMessageDiv.style.display = "block";

    errorMessageDiv1.textContent =
      "Неправильный формат телефона. Используйте формат: +375-xx-xxx-xx-xx";
    errorMessageDiv1.style.display = "block";
    return;
  }

  if (message.length < 10) {
    errorMessageDiv.textContent =
      "Сообщение должно содержать минимум 10 символов.";
    errorMessageDiv.style.display = "block";

    errorMessageDiv1.textContent =
      "Сообщение должно содержать минимум 10 символов.";
    errorMessageDiv1.style.display = "block";
    return;
  }

  data.append("username", username);
  data.append("phone", phone);
  data.append("comment", message);

  document.getElementById("username").value = "";
  document.getElementById("username1").value = "Ваше имя";
  document.getElementById("phone").value = "";
  document.getElementById("phone1").value = "Ваш телефон";
  document.getElementById("message").value = "";
  document.getElementById("message1").value = "Ваше сообщение";

  fetch("./phpScripts/sendToTelegram.php", {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      errorMessageDiv.textContent =
        "Сообщение отправлено. Спасибо за вашу активность!";
      errorMessageDiv.style.display = "block";
      errorMessageDiv1.textContent =
        "Сообщение отправлено. Спасибо за вашу активность!";
      errorMessageDiv1.style.display = "block";
      errorMessageDiv.style.color = "green";
      errorMessageDiv1.style.color = "green";

      setTimeout(() => {
        errorMessageDiv.style.display = "none";
        errorMessageDiv1.style.display = "none";
      }, 5000);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      errorMessageDiv.textContent =
        "Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.";
      errorMessageDiv.style.display = "block";
    });
}
