// function updateOutput() {
//     var input = document.getElementById('userInput').value;
  
//     // Display typed text
//     document.getElementById('output').innerHTML = "You typed: " + input;
  
//     // Display character count
//     document.getElementById('count').innerHTML = "Character count: " + input.length;
//   }
  
function updateOutput() {
    var input = document.getElementById('userInput').value;
    var output = document.getElementById('output');
    var count = document.getElementById('count');
  
    if (input.length >= 1) {
      output.innerHTML = " " + input;
      count.innerHTML = "Character count: " + input.length;
  
      output.style.display = "block";
      count.style.display = "block";
    } else {
      output.style.display = "none";
      count.style.display = "none";
    }
  }
  