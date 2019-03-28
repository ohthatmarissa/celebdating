$(document).ready(function() {
  $("form#criteria").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $('select#gender').val();
    var pets = $('select#pets').val();
    var match;

      if (age > 35 && pets === 'cats') {
        if(gender === 'female'){
        match = "Morrisey"
      } else if (gender ==='male') {
        match = "Meryl Streep";
      }
    }

      if (age < 35 && pets === 'cats') {
        if(gender === 'female'){
        match = "Zach Efron"
      } else if (gender ==='male') {
        match = "Ariana Grande";
      }
    }

      if (age > 35 && pets === 'dogs') {
        if(gender === 'female'){
        match = "Steve Buschemi"
      } else if (gender ==='male') {
        match = "Angelina Jolie";
      }
    }

      if (age<35 && pets === 'dogs'){
        if(gender==='male'){
          match = "Kylie Jenner"
        } else if(gender==='female'){
          match = "Post Malone"
        }
      }

      $("#match").text("Your match is " + match + "!");
      $("#match").show();

      event.preventDefault();


      if (age<35 && pets === 'dogs'){
        if(gender==='male'){
          match = "Kylie Jenner"
        }
        else if(gender==='female'){
          match = "Post Malone"
        }
      }


      if (true) {
        //this gets run
      }


  });
});
