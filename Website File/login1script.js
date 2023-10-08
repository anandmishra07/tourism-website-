document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.querySelector(".password");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.querySelector("i").classList.remove("fa-eye");
      this.querySelector("i").classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      this.querySelector("i").classList.remove("fa-eye-slash");
      this.querySelector("i").classList.add("fa-eye");
    }
  });
  