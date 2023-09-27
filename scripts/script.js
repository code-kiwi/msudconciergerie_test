const mainContentElement = document.getElementById('mainContent');
const mainContentBGInterval = 5000;
let mainContentBGCurrentIndex = 0;
const backgroundHeaders = [
    './src/images/headers/banc_olivier.jpg',
    './src/images/headers/branche_olivier.jpg',
    './src/images/headers/champ_paille_olivier.jpg',
    './src/images/headers/foret_soleil_couchant.jpg',
    './src/images/headers/lavandes.jpg',
    './src/images/headers/provence_aerien.jpg',
    './src/images/headers/provence_crepuscule_aerien.jpg',
    './src/images/headers/vignes_vegetation.jpg',
];

function changeMainContentBackground() {
    mainContentBGCurrentIndex = (mainContentBGCurrentIndex + 1) % backgroundHeaders.length;
    const image = new Image();
    image.src = backgroundHeaders[mainContentBGCurrentIndex];
    image.onload = () => {
        mainContentElement.style.backgroundImage = `url(${image.src})`;
    };
}

setInterval(changeMainContentBackground, mainContentBGInterval);
