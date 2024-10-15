
const habilidades = document.querySelectorAll('.lista-habilidades li');

habilidades.forEach(habilidade => {
    habilidade.addEventListener('mouseover', () => {
        habilidade.style.transform = 'scale(1.1)'; 
    });

    habilidade.addEventListener('mouseout', () => {
        habilidade.style.transform = 'scale(1)';  
    });
});
