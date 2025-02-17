document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav ul li a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    });

    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Отключаем стандартное поведение ссылки
            const targetId = this.getAttribute('href').substring(1); // Извлекаем ID без #
            const targetElement = document.getElementById(targetId);
            if (targetElement) { // Проверяем, существует ли элемент
                targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокрутка к элементу с анимацией
            }
        });
    });


