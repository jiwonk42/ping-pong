// Business Logic
var output = function(number) {
  var numbers = [];
  for (var i = 1; i <= number; i++) {
    var singleNumber = i;
    if (i % 3 === 0) {
      singleNumber = "ping";
    }
    numbers.push(singleNumber);
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
