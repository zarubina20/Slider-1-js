let photosCount = 8;
let currentPage = 1;
function showNextPhoto() {
    currentPage++;
    if(currentPage > photosCount) currentPage = 1;

        let elem = document.getElementById("currentPhoto");
        elem.src = "img/photo_" + currentPage + ".jpg";
}


function showBeforePhoto() {
    currentPage--;
    if (currentPage < 1) currentPage = photosCount;

    updatePhoto();
}

function updatePhoto() {
    let elem = document.getElementById("currentPhoto");
    elem.src = `./img/photo_${currentPage}.jpg`;
}
