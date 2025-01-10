const swipe = document.getElementById('bigg-cont');

const divs = ['1', '2', '3'];

const swipeContainer = document.getElementById('swipeEffectPan');

let currentIndex = 0;

function Swipe(){
    currentIndex = (currentIndex + 1)% divs.length;

    swipe.style.transform = 'translateX(-${currentIndex*300}px';

}