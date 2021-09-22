const botao = document.querySelector('#btn-verificar');
function verificarEstacoes() {
    
    const mes = prompt('Digite o mês por extenso (ex: Janeiro)');
    const resultado = document.querySelector('#resultado');
    
    let estacao = '';
    
    imagensEstacoes(mes);
    addBackground(mes);
    
    switch(mes.toLowerCase())  {
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = 'Inverno';
            break;
        case 'abril': case 'maio': case 'junho':
            estacao = 'Primavera';
            break;
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'Verão';
            break;
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = 'Outono';
            break;
        default:
            estacao = 'INDEFINIDA';
            alert('[ERROR] Mês inválido');
            break;
    }
    resultado.innerHTML = `<p>No mês de <strong>${mes}</strong>, estamos na estação <strong>${estacao}</strong></p>`;
}

function addBackground(mes) {
    const container = document.querySelector('.container');

    if(mes === 'janeiro' || mes === 'fevereiro' || mes === 'março') {
        container.style.backgroundColor = '#023e8a';
        botao.style.backgroundColor = '#0096c7';
    } else if(mes === 'abril' || mes === 'maio' || mes === 'junho') {
        container.style.backgroundColor = '#e07be0';
        botao.style.backgroundColor = '#ffafcc';
    } else if(mes === 'julho' || mes === 'agosto' || mes === 'setembro') {
        container.style.backgroundColor = '#dbb42c';
        botao.style.backgroundColor = '#b08968';
    } else if(mes === 'outubro' || mes === 'novembro' || mes === 'dezembro') {
        container.style.backgroundColor = '#dc5318';
        botao.style.backgroundColor = '#ae2012';
    }
}


function imagensEstacoes(mes) {
    const img = document.createElement('img');
    const addImg = document.body.appendChild(img);
    const estacoesImg = [
        img.src = 'img/inverno.jpg',
        img.src = 'img/primavera.jpg',
        img.src = 'img/verao.jpg',
        img.src = 'img/outono.jpg'
    ];

    if(verificaEstacao(inverno)) {
        addImg;
        img.src = 'img/inverno.jpg';
        console.log(addImg, estacoesImg);
    }
    
}

function verificaEstacao(inverno) {
    inverno = 'janeiro' || 'fevereiro' || 'março';
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

/* function imagemOutono() {
    img.src = 'img/outono.jpg'
    document.body.appendChild(img)
    botao.classList.add('red')
} */

