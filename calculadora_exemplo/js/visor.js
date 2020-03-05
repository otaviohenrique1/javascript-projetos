function criaVisor() {
    var visorNumero = document.createElement('p');
    visorNumero.textContent = '0.0';
    visorNumero.classList.add('visor-numero');
    visorNumero.setAttribute('id', 'visor');

    var visorDiv = document.querySelector('.area-visor'); 
    visorDiv.appendChild(visorNumero);
}