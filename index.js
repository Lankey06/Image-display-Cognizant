const pics = document.querySelectorAll('.pics');
const selectedImage = document.querySelector('.selected-image');

pics.forEach(pic => {
    pic.addEventListener('click', function() {
        selectedImage.src = this.src;
    });
});
