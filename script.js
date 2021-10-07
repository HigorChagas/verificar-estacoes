const botao = document.querySelector('#btn-verificar');
function verificarEstacoes() {
    
    const mes = prompt('Digite o mês por extenso (ex: Janeiro)');
    const resultado = document.querySelector('#resultado');
    const img = document.createElement('img');
    document.body.appendChild(img);
    
    
    let estacao = '';
    
    addBackground(mes);
    
    switch(mes.toLowerCase())  {
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = 'Inverno';
            img.src = 'img/inverno.jpg';
            break;
        case 'abril': case 'maio': case 'junho':
            estacao = 'Primavera';
            img.src = 'img/primavera.jpg';
            break;
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'Verão';
            img.src = 'img/verao.jpg'
            break;
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = 'Outono';
            img.src = 'img/outono.jpg'
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
        botao.classList.add('blue', 'btn-blue');
    } else if(mes === 'abril' || mes === 'maio' || mes === 'junho') {
        container.style.backgroundColor = '#e07be0';
        botao.classList.add('pink', 'btn-pink');
    } else if(mes === 'julho' || mes === 'agosto' || mes === 'setembro') {
        container.style.backgroundColor = '#dbb42c';
        botao.classList.add('brown', 'btn-brown');
    } else if(mes === 'outubro' || mes === 'novembro' || mes === 'dezembro') {
        container.style.backgroundColor = '#dc5318';
        botao.classList.add('red', 'btn-red');
    }
}