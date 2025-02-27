document.addEventListener("DOMContentLoaded", function () {
    console.log("Сайтът е зареден!");

    // Избираме всички секции
    const sections = document.querySelectorAll("section");

    // Конфигурираме Intersection Observer
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(`Показва се: ${entry.target.id}`); // Дебъгване
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "-50px", threshold: 0.1 } // По-гъвкаво засичане
    );

    // Наблюдаваме всяка секция
    sections.forEach(section => {
        observer.observe(section);
    });

    // Бутон "Към началото"
    const backToTop = document.createElement("button");
    backToTop.id = "backToTop";
    backToTop.innerText = "⬆ Към началото";
    document.body.appendChild(backToTop);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
