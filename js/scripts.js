// Business Logic
var output = function(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    numbers.push(i);
  };
  return numbers.join('<li>');
};

// User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = output(number);

    $("#output ul").empty().append("<li>" + result + "</li>");

  });
});
