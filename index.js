var button=document.querySelector('button');
var colors = ['beige', 'lavender', 'azure', 'gray', 'silver'];
let currentColorIndex = 0;

button.addEventListener('click', function() {
  document.body.style.backgroundColor = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
});
