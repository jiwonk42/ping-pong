// Business Logic
var output = function(number) {

  if(number >= 1) {
    var numbers = []; // an empty array to store numbers to add to unordered list as list items
    for (var i = 1; i <= number; i++) {
      var singleNumber = i;

      if (i % 15 === 0) { // Numbers divisible by 15 are replaced with "ping-pong"
        singleNumber = "ping-pong"
      } else if (i % 3 === 0) { // Numbers divisible by 3 are replaced with "ping"
        singleNumber = "ping";
      } else if (i % 5 === 0) { // Numbers divisible by 5 are replaced with "pong"
        singleNumber = "pong";
      }
      numbers.push(singleNumber);
    };
    numbers = numbers.join('<li>');
  } else {
    numbers = "Please enter an integer that is equal to or greater than 1.";
  }

  return numbers;
};

// User Interface Logic
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val()); // parseInt() to convert strings into numbers
    var result = output(number);

    $("#output ul").empty().append("<li>" + result + "</li>"); // empty() stops adding list items to the unordered list but append only if it's an empty list
    $("#output").show();
  });
});
