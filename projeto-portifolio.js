function MenuClick() {
    var itens = document.querySelector('#itens')
    itens.classList.toggle('active')
}

function TypeWriter(elemento) {
    let textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra
        }, 95 * i)
    })

}
let nome = document.querySelector('h1.nome')
TypeWriter(nome)

function nav() {
    itens.classList.remove('active')
}
function mudar() {
    let body = document.querySelector('body')
    let header = document.querySelector('.hd-1')
    let menu = document.querySelector('#itens ul')
    body.classList.toggle('mudar')
    header.classList.toggle('mudar')
    menu.classList.toggle('mudar')
}
