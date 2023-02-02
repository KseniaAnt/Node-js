let div1 = document.createElement('div')
div1.setAttribute('class', 'wrapper')

let form = document.createElement('form')
form.setAttribute('action', '#')

let div2 = document.createElement('div')
div2.setAttribute('class', 'field')
let inp1 = document.createElement('input')
inp1.type = 'text'
inp1.setAttribute('required', 'true')

let div3 = document.createElement('div')
div3.setAttribute('class', 'field')
let inp2 = document.createElement('input')
inp2.type = 'text'
inp2.setAttribute('required', 'true')

let div4 = document.createElement('div')
div4.setAttribute('class', 'field')
let btn = document.createElement('button')
btn.id = 'submit'
btn.innerHTML = 'Войти'

div4.appendChild(btn)

div3.appendChild(inp2)

div2.appendChild(inp1)

form.appendChild(div2)
form.appendChild(div3)
form.appendChild(div4)

div1.appendChild(form)

document.body.appendChild(div1)

let btn_in = document.getElementById('sing_in')
