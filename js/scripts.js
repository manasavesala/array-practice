$(document).ready(function() {
  $("form#icecreamflav").submit(function(event) {
  var blanks = ["fave", "alsoLike", "okFlavor", "hateFlavor"];
  blanks.forEach(function(blank) {
    var userInput = $("input#" + blank).val();
    $("." + blank).text(userInput);
    });
  });

  $("form#split").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    var splitSentence = sentence.split(' ');
    console.log(splitSentence);
    var three =[];
    splitSentence.forEach(function(word){
      if(word.length >= 3){
        three.push(word);
      }
    });
    var nextSentence = (three.reverse()).join(" ");


    console.log(nextSentence);
  });
});
