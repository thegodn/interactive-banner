document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');
    const images = document.querySelectorAll('.banner-image');

    categories.forEach((category, index) => {
        category.addEventListener('mouseover', () => {
            images.forEach(image => image.classList.remove('active'));
            images[index].classList.add('active');
        });
    });
});
