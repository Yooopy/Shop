if (localStorage.length > 0) {
  window.close();
  window.open("./home.html");
} else {
  let page = "login";
  function switchWindow(valuee) {
    let form = document.getElementsByClassName("form");
    if (valuee === "signin") {
      page = "signin";
      form[0].style.transition = "all 0.5s ease";
      form[0].style.animation = "opacity 0.7s ease";
      setTimeout(function () {
        form[0].style.display = "none";
      }, 500);
      form[1].style.animation = "opacityR 0.7s ease";
      setTimeout(function () {
        form[1].style.display = "flex";
      }, 500);
      document.getElementsByTagName("button")[0].style.color = "black";
      document.getElementsByTagName("button")[1].style.color = "#7600b5";
    } else if (valuee === "login") {
      page = "login";
      form[1].style.transition = "all 0.5s ease";
      form[1].style.animation = "opacity 0.7s ease";
      setTimeout(function () {
        form[1].style.display = "none";
      }, 500);
      form[0].style.animation = "opacityR 0.7s ease";
      setTimeout(function () {
        form[0].style.display = "flex";
      }, 500);
      document.getElementsByTagName("button")[1].style.color = "black";
      document.getElementsByTagName("button")[0].style.color = "#7600b5";
    }
  }

  function submitForm() {
    if (page === "signin") {
      let userName = document.getElementById("username-input-signin").value;
      let password = document.getElementById("password-input-signin").value;
      localStorage.setItem(userName, password);
      document.cookie =
        "username=" +
        userName +
        "; expires=Thu, 18 Dec 2029 12:00:00 UTC; path=/";
      document.cookie =
        "password=" +
        password +
        "; expires=Thu, 18 Dec 2029 12:00:00 UTC; path=/";
    } else if (page === "login") {
      let userName = document.getElementById("username-input-login").value;
      let password = document.getElementById("password-input-login").value;
      if (localStorage.getItem(userName) === password) {
        alert("Login successful!");

        window.close();
        window.open("./home.html");
      } else {
        alert("Wrong username or password! try again or make a new account!");
      }
    }
  }
}
