let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const element = document.querySelector(".mySwiper");

const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        const { width } = entry.contentRect;
        if (width <= 800) {
            element.swiper.params.slidesPerView = 1;
        } else {
            element.swiper.params.slidesPerView = 2;
        }
    }

    element.swiper.update();
});

resizeObserver.observe(document.querySelector('.imagenesChicas'));

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 7000);
}

function changeSlide(n) {
    slideIndex += n;

    if (slideIndex < 1) {
        slideIndex = slides.length;
    } else if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

showSlides();

