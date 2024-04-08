const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');
const overlayCaption = document.getElementById('overlay-caption');
const closeOverlay = document.getElementById('close-overlay');

const imageData = [
    { src: 'img/earings.jpg', alt: 'Macro shot of earings ', caption: 'Macro shot of earings' },
    { src: 'img/macro eye.jpg', alt: 'album cover 2', caption: 'Macro shot of eye' },
    { src: 'img/macro grass hopper.jpg', alt: 'grasshopper', caption: 'Macro shot of grasshopper' },
    { src: 'img/panning shot.jpg', alt: 'blue truck', caption: 'Panning shot ' },
    { src: 'img/macro-flower.jpg', alt: 'flower', caption: 'Flower with bee' },
    { src: 'img/rings.jpg', alt: 'rings', caption: 'Macro shot of rings' },
    
];

function createGallery() {
    imageData.forEach((data, index) => {
        const img = document.createElement('img');
        img.src = data.src;
        img.alt = data.alt;
        img.setAttribute('data-index', index);
        img.setAttribute('data-caption', data.caption);
        gallery.appendChild(img);
    });
}

function showOverlay(index) {
    const data = imageData[index];
    overlayImage.src = data.src;
    overlayImage.alt = data.alt;
    overlayCaption.textContent = data.caption;
    overlay.style.display = 'flex';
}

function hideOverlay() {
    overlay.style.display = 'none';
}

gallery.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
        const index = event.target.dataset.index;
        showOverlay(index);
    }
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlayImage) {
        hideOverlay();
    }
});

closeOverlay.addEventListener('click', hideOverlay);

createGallery();