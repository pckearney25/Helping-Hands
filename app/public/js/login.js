$(document).ready(function() {
  $(".role-btn").on("click", function(event) {
    event.preventDefault();
    //The object that will be used to retrieve the users information.
    var newLogin = {
      email: "",
      password: "",
      hh_role: ""
    };

    var userData = {};

    newLogin.hh_role = $(this).val();

    if (newLogin.hh_role === "volunteer") {
      newLogin.email = $("#vol-email")
        .val()
        .trim();
      newLogin.password = $("#vol-password")
        .val()
        .trim();
    } else if (newLogin.hh_role === "organization") {
      newLogin.email = $("#org-email")
        .val()
        .trim();
      newLogin.password = $("#org-password")
        .val()
        .trim();
    }

    document.getElementById("vol-login-form").reset();
    document.getElementById("org-login-form").reset();

    console.log(newLogin);

    //validation function to insure all fields are populated.
    if (!newLogin.email || !newLogin.password) {
      console.log("There are empty fields");
      return;
    }

    $.post("/api/login", newLogin, function(data) {
      console.log("Did it return?");
      console.log(data);
    });
  });
});
