const injectScript = `
  function makeButton(id) {
    var btn = document.createElement('button')
    var text = document.createTextNode('Show answer')
    btn.className = 'btn btn-primary'
    btn.setAttribute('type', 'button')
    btn.appendChild(text)
    btn.onclick = function(){
      document.getElementsByClassName(id)[0].style.display = 'block';
      return false;
    }
    return btn
  }

  window.onload = function() {

    var answers = document.getElementsByClassName('answer')

    for (var i = 0; i < answers.length; i++) {
      answers[i].appendChild(makeButton(i))
      answers[i].children[0].style.display = 'none'
      answers[i].childNodes[0].className = i
    }

  }
`

export default injectScript
