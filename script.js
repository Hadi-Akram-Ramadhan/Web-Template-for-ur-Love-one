document.addEventListener("DOMContentLoaded", function(event) {
  var fadeInElements = document.querySelectorAll('.fade-in');
  fadeInElements.forEach(function(element) {
    element.classList.add('fade-in-active');
  });
});
