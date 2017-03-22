$(document).ready(function() {
  $("form#order").submit(function(event) {

    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var teamInput =  $("input#team").val();
    var sizeInput = $("input#sizeInput").val()

    $("#receipt").show();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".team").text(teamInput);
    $(".size").text(sizeInput);

    event.preventDefault();
  });
});
