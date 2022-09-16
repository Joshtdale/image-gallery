const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['images/pic1.jpg',
    'images/pic2.jpg',
    'images/pic3.jpg',
    'images/pic4.jpg',
    'images/pic5.jpg']


/* Declaring the alternative text for each image file */
const alts = {
    'images/pic1.jpg': 'Eye',
    'images/pic2.jpg': 'Rock face',
    'images/pic3.jpg': 'Flowers',
    'images/pic4.jpg': 'Pharaoh',
    'images/pic5.jpg': 'Butterfly'
}


// loops through image array
for (const image of images) {
    const newImage = document.createElement('img');
    // set attribute of element img to = looped images in array
    newImage.setAttribute('src', image)
    newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
}
// listens for click
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class')
    if (btnClass === 'dark') {
        // grabs attribute of class 'light'
        btn.setAttribute('class', 'light')
        // edit attributes of selected class
        btn.textContent = 'Lighten'
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else {
        btn.setAttribute('class', 'dark')
        btn.textContent = 'Darken'
        overlay.style.backgroundColor = 'rgba(0,0,0,0)'
    }
})