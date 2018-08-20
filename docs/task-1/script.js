$(document).ready(function() {
  $('button').click(function() {
    var input = document.getElementById('input').value;
    var output = "";
    
    // palindrome
    for(let i = input.length - 1; i >= 0; i--) {
      output += input[i];
    }

    if(input === output) {
      $('#output')
        .removeClass('correct')
        .removeClass('wrong')
        .addClass('correct');
      document.getElementById('output').innerHTML = `Tak! <pre>${input}</pre> od tyłu to <pre>${output}</pre>`;
    } else {
      $('#output')
        .removeClass('correct')
        .removeClass('wrong')
        .addClass('wrong');
      document.getElementById('output').innerHTML = `Nie! <pre>${input}</pre> od tyłu to <pre>${output}</pre>`;
    }
  });

  $('input').keypress(function(e) {
    if(e.key === "Enter") {
      $('button').click();
    }
  });
});
