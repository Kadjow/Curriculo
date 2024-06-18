document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Mudar Cor de Fundo';
    button.style.display = 'block';
    button.style.margin = '20px auto';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#0066cc';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === 'rgb(244, 244, 244)' ? '#e0e0e0' : '#f4f4f4';
    });

    document.body.appendChild(button);
});