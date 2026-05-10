document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Анимация появления всей карточки
    // Следим за всеми элементами с классом .reveal (который ты сейчас добавляешь в HTML)
    const cards = document.querySelectorAll('.reveal');

    const observerOptions = {
        threshold: 0.1 // Сработает, когда 10% карточки покажется на экране
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); // Добавляем класс active для запуска CSS-анимации
                // Можно добавить unobserve, если хочешь, чтобы анимация была только один раз
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));


    // 2. Кнопка "Наверх" (Твой старый рабочий код)
    const topBtn = document.getElementById("scrollToTop");

    if (topBtn) { // Проверка, чтобы не было ошибок, если кнопки нет в HTML
        window.onscroll = function() {
            if (window.scrollY > 300) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        };

        topBtn.onclick = function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };
    }
});
