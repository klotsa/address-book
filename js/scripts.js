$(document).ready(function() {
  $("form#contactInformation").submit(function(event) {

    var nameInput = $("input#name").val();
    var mailingInput = $("input#mailing").val();
    var phoneNumberInput =  $("input#phoneNumber").val();
    var emailInput = $("input#email").val();

    $("h1#addresses").after("<h2>" + nameInput + "</h2><p>" + mailingInput + "</p><p>" + phoneNumberInput + "</p><p>" + emailInput + "</p>");

    event.preventDefault();

    $("h2").click(function () {
      $("p").toggle();
    });
  });
});
