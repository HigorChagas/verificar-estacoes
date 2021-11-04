const botao = document.querySelector('#btn-verificar');
function verificarEstacoes() {
    
    const mes = prompt('Digite o mês por extenso (ex: Janeiro)');
    const resultado = document.querySelector('#resultado');
    const container = document.querySelector('.container');
    const titulo = document.querySelector('#title');
    const img = document.createElement('img');
    document.body.appendChild(img);
    
    let estacao = '';
      
    switch(mes.toLowerCase())  {
        case 'janeiro': case 'fevereiro': case 'março':
            estacao = 'Inverno';
            img.src = 'img/inverno.jpg';
            container.style.backgroundColor = '#023e8a';
            titulo.innerHTML = 'Inverno!';
            break;
        case 'abril': case 'maio': case 'junho':
            estacao = 'Primavera';
            img.src = 'img/primavera.jpg';
            container.style.backgroundColor = '#e07be0';
            titulo.innerHTML = 'Primavera!';
            break;
        case 'julho': case 'agosto': case 'setembro':
            estacao = 'Verão';
            img.src = 'img/verao.jpg';
            container.style.backgroundColor = '#dbb42c';
            titulo.innerHTML = 'Verão!';
            break;
        case 'outubro': case 'novembro': case 'dezembro':
            estacao = 'Outono';
            img.src = 'img/outono.jpg'
            container.style.backgroundColor = '#dc5318'
            titulo.innerHTML = 'Outono';
            break;
        default:
            estacao = 'INDEFINIDA';
            alert('[ERROR] Mês inválido');
            resultado.innerHTML = 'Mês inválido'
            return;
    }
    resultado.innerHTML = `<p>No mês de <strong>${mes}</strong>, estamos na estação <strong>${estacao}</strong></p>`;
}