let cat = document.getElementById('cat');
let catsound = document.getElementById('cat-miau');

function miau() {
    catsound.play();
}

cat.addEventListener('click', miau);