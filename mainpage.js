// Navbar toggler
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

document.addEventListener('DOMContentLoaded', function () {
  var image = document.getElementById('expandImage');
  var textBlock = document.getElementById('expandedText');

  image.addEventListener('click', function () {
      if (textBlock.style.display === 'none') {
          textBlock.style.display = 'block';
      } else {
          textBlock.style.display = 'none';
      }
  });
});
