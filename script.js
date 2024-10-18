// Seleciona o botão do menu hambúrguer e o menu
const menuHamburger = document.getElementById('menu-hamburger');
const menu = document.getElementById('menu');

// Adiciona um evento de clique no botão
menuHamburger.addEventListener('click', () => {
    // Alterna a classe 'active' no menu ao clicar no hambúrguer
    menu.classList.toggle('active');
});