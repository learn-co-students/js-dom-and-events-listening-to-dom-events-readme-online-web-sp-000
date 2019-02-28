const main = document.getElementById('main')
const input = document.querySelector('input')

// let divs = document.querySelectorAll('div')
//
// const bubble = (e) => {
//   console.log(this)
//   console.log(this.firstChild.nodeValue.trim() + ' bubbled');
//
// }
// for (let i = 0; i < divs.length; i++) {
//   divs[i].addEventListener('click', bubble)
// }


input.addEventListener('keydown', (e)=> {
    if(e.which === 71) {
      console.log('default prevented')
      return e.preventDefault()
    } else {
      console.log('Not a "g"')
    }
  })
main.addEventListener('click', (event) => {console.log('alert')})
