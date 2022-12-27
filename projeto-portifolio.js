function MenuClick() {
    var itens = document.querySelector('#itens')
    itens.classList.toggle('active')
}

function TypeWriter() {
    var nome = document.querySelector('h1.nome')
    let textoArray = nome.innerHTML.split('')
    nome.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            nome.innerHTML += letra
        }, 95 * i)
    })

}

TypeWriter()

function nav() {
    itens.classList.remove('active')
}
function mudar() {
    let body = document.querySelector('body')
    let header = document.querySelector('.hd-1')
    let menu = document.querySelector('#itens')
    body.classList.toggle('mudar')
    header.classList.toggle('mudar')
    menu.classList.toggle('mudar')
    menu.classList.remove('active')
}

