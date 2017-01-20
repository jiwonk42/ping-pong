// Business Logic
var output = function(number) {

};

// User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = output(number);

    $("#output").text(result);

  });
});
