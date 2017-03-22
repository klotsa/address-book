$(document).ready(function() {
  $("form#order").submit(function(event) {

    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var phoneNumberInput =  $("input#phoneNumber").val();
    var emailInput = $("input#email").val()

    $("#receipt").show();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".phoneNumber").text(phoneNumberInput);
    $(".email").text(emailInput);

    event.preventDefault();
  });
});
