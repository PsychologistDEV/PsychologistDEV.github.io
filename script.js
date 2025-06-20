document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-mobile');
    const navList = document.querySelector('nav ul');
    
    menuBtn.addEventListener('click', function() {
        // Alternar a classe 'show' no menu
        navList.classList.toggle('show');
        
        // Alternar entre ícone de hambúrger e X
        const icon = menuBtn.querySelector('i');
        if (navList.classList.contains('show')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fechar o menu quando um item for clicado (para mobile)
    const navItems = document.querySelectorAll('nav ul li a');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            if (window.innerWidth <= 768) { // Só executa em mobile
                navList.classList.remove('show');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // Fechar o menu ao redimensionar a tela (se voltar para desktop)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navList.classList.remove('show');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});