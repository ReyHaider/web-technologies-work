$(document).ready(function () {
  $("#myForm").submit(function (e) {
    e.preventDefault();

    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (name == "" || email == "" || message == "") {
      alert("Please fill in all fields.");
    } else {
      alert("Form submitted successfully!");
    }
  });
});
