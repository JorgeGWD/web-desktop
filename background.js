function updateBackground() {
    let today = new Date();
    let dayOfYear = getDayOfYear(today);
    let collectionId = '206';
    let imageUrl = `https://source.unsplash.com/collection/${collectionId}/${dayOfYear} 1920x1080`;

    document.body.style.backgroundImage = `url('${imageUrl}')`;
}
  
function getDayOfYear(date) {
    let start = new Date(date.getFullYear(), 0, 0);
    let diff = date - start;
    let oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

updateBackground();
  