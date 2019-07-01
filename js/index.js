// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');

console.log("here?");
main.addEventListener('click', function(event) {
  console.log('I was clicked!');
});
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
  console.log(e.which);
});


divs = document.querySelectorAll('div');

function capture(e) {
  console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
  // set the third argument to `true`!
  divs[i].addEventListener('click', capture, true);
}
