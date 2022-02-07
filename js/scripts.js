// UI Logic

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}

const vowels = ["a","e","i","o","u"]

function pigLatin(text) {
  if (noInputtedWord(text)) {
    return "";
  }
  else{
    text=text.toLowerCase();
    if (vowels.indexOf(text[0]) > -1) {
      return text=text+"way";
  } else if ("qu" === text.slice(0, 2)){
    let firstcons = text.slice(0, 2);
    let middle = text.slice(2, text.length);
    text = middle+firstcons+"ay";
    return text;

  } else { for (let i = 0; i<text.length; i++) {
    if (vowels.indexOf(text[i]) > -1){
        let firstcons = text.slice(0, i);
        let middle = text.slice(i, text.length);
        text = middle+firstcons+"ay";
        break;}
      }
  return text;}
  }
}


  function latinSentence(text) {
    if (noInputtedWord(text)) {

      return "";
    }
    let htmlString = "";
    let holdingString = "";
    let textArray = text.split(" ");
    textArray.forEach(function(element, index) {
      htmlString=htmlString + pigLatin(element) + " "
      // htmlString = htmlString.concat(element);

      if (index !== (textArray.length - 1)) {
        holdingString= htmlString.slice(0, -1);
      }
    });
    return holdingString;
  }


  $(document).ready(function(){
    $("form#word-counter").submit(function(event){
      event.preventDefault();
      const passage = $("#text-passage").val();
      const wordCount = latinSentence(passage);
      $("#pig-latin-result").html(wordCount);
    });
  });
