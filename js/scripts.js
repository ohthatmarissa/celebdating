$(document).ready(function() {
  $("form#criteria").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $('select#gender').val();
    var pets = $('select#pets').val();
    var match;
    
    if(age) {
      if (gender ==='female' && age > 35 && pets=== 'cats') {
        match = "Morrisey"
      }
      $("#match").prepend("<h1>Your match is" + match + "</h1>");

      event.preventDefault();
    }
  });
});
