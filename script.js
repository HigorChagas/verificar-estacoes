var botao = document.getElementById('btn-verificar')
function verificarEstacoes() {
    let mes = prompt('Digite o mês em extenso (ex: Janeiro)')
    let estacao = ''
    let resultado = document.getElementById('resultado')
    
    
    let container = document.querySelector('.container')
    
    switch(mes.toLowerCase())  {
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = 'Inverno'
            container.style.backgroundColor = '#023e8a'
            botao.style.backgroundColor = '#0096c7'
            imagemInverno()
            break  
        case 'abril': case 'maio': case 'junho':
            estacao = 'Primavera'
            container.style.backgroundColor = '#e07be0'
            botao.style.backgroundColor = '#ffafcc'
            imagemPrimavera()
            break
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'Verão'
            container.style.backgroundColor = '#dbb42c'
            botao.style.backgroundColor = '#b08968'
            imagemVerao()
            break
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = 'Outono'
            imagemOutono()
            container.style.backgroundColor = '#dc5318'
            botao.style.backgroundColor = '#ae2012'
            break
        default:
            estacao = 'INDEFINIDA'
            alert('[ERROR] Mês inválido')
            break
    }
    resultado.innerHTML = `<p>No mês de <strong>${mes}</strong>, estamos na estação <strong>${estacao}</strong></p>`
}

let img = document.createElement('img')

function imagemInverno() {
    img.src = 'img/inverno.jpg'
    document.body.appendChild(img)
    botao.classList.add('blue')
}

function imagemPrimavera() {
    img.src = 'img/primavera.jpg'
    document.body.appendChild(img)
    botao.classList.add('pink')
}

function imagemVerao() {
    img.src = 'img/verao.jpg'
    document.body.appendChild(img)
    botao.classList.add('brown')
}

function imagemOutono() {
    img.src = 'img/outono.jpg'
    document.body.appendChild(img)
    botao.classList.add('red')
}

