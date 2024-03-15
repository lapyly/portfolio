const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(signUpForm);
  //   const obj = {};

  //   const datos=data.forEach((value, key) => (obj[key] = value));

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "signup", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("¡Registro exitoso!");
      } else {
        console.log("Error al registrar usuario.");
      }
    }
  };
  xhr.send(JSON.stringify(data));
  // fetch('/signup', {
  //     header: {
  //         "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify(obj),
  // }).then((response) => response.json()).then((data) => console.log(data)).catch((error) => console.log(error));
});
