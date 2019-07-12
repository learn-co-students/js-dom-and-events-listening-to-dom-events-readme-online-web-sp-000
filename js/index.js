// using this file is optional
// you can also load the code snippets in using your browser's console


const keyPressedMain = document.querySelector('main')

keyPressedMain.addEventListener('click', (e)=> {
  console.log(e.target);
})


let div = document.querySelector('div')

function bubble (e) {
  console.log(this.firstChild.nodeValue.trim() + 'something')
}

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener('click', bubble)
  debugger
}


bubble();
