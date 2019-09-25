// listening for nodes
const main = document.getElementById('main');

main.addEventListener('click', function(event) {
  alert('I was clicked!');
});



// triggering events listeners on DOM nodes
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
    console.log(e.which);
});



// preventing the default behavior for DOM nodes
const input = document.querySelector('input');

input.addEventListener('keydown', function(e) {
    if (e.which === 71) {
        console.log('default prevented');
        return e.preventDefault();
    } else {
        console.log('Not a "g"');
    }
});



// bubbling vs capturing events
let divs = document.querySelectorAll('div');

function bubble(e) {
    console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', bubble);
}

// click on the div containing "5":

// 5 bubbled
// 4 bubbled
// 3 bubbled
// 2 bubbled
// 1 bubbled

// In order to capture...
// you need to set the third argument to addEventListener() to true
divs = document.querySelectorAll('div');

function capture(e) {
    console.log(this.firstChild.nodeValue.trim() + ' captured');
}

for (let i = 0; i < divs.length; i++) {
    // set the third argument to `true`!
    divs[i].addEventListener('click', capture, true);
}

// Now click on div 5:

// 1 captured
// 2 captured
// 3 captured
// 4 captured
// 5 bubbled
// 5 captured
// 4 bubbled
// 3 bubbled
// 2 bubbled
// 1 bubbled



// stop propagated behaviors
const divs = document.querySelectorAll('div');

function bubble(e) {

    // stop! that! propagation!
    e.stopPropagation();

    console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', bubble);
}

// Now try clicking on any node
// you should only see one log statement!
