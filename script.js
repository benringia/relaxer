const container = document.getElementById('container');
const text = document.getElementById('text');

const totalTime = 8000;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();
function breathAnimation() {
   text.innerText= 'Breathe In';
   container.className='container grow'
    setTimeout(function() {
        text.innerText='Hold';

        setTimeout(function() {
            text.innerText='Breathe Out';
            container.className='container shrink'
        }, holdTime);
    }, breatheTime);
}

setInterval(breathAnimation, totalTime);