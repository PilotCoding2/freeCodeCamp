const galleryImgs = document.querySelectorAll('.gallery-item');
const galleryBigDisp = document.querySelector('.lightbox');
const closeBtn = document.querySelector('#close-btn');
const bigImg = document.querySelector('#lightbox-image')

const displayImg = (img) => {
    galleryBigDisp.style.display = 'flex';
    bigImg.src = img.src.replace('-thumbnail', '');
}

const closeDisplayImg = () => {
    galleryBigDisp.style.display = 'none';
    galleryImgs.forEach(img => {
        img.style.display = 'block';
    });
}
galleryImgs.forEach(img => {
    img.addEventListener("click", () => {
        displayImg(img);
    })
});

closeBtn.addEventListener("click", () => {
    closeDisplayImg();
});

galleryBigDisp.addEventListener("click", () => {
    closeDisplayImg();
});