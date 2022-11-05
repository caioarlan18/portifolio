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
    let itens = document.querySelector('#itens')
    itens.classList.remove('active')
}
