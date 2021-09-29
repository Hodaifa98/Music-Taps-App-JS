addEventListener('load', () => {
    // Variables.
    const sounds = document.getElementsByClassName('sound');
    const pads = document.querySelectorAll('.pads > div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394', '#d36060', '#c060d3',
        '#d3d160', '#6860d3', '#60b2d3'
    ];

    //
    pads.forEach((pad, i) => {
        pad.addEventListener('click', function() {
            sounds[i].currentTime = 0;
            sounds[i].play();
            createBubbles(i);
        });
    });

    //
    const createBubbles = (i) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[i];
        bubble.style.animation = 'jump 1.5s ease';
        //const left = (i * (100 / 6) + 7) + "%";
        //bubble.style.left = left;
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});

// TODO.
// Add loop. More sounds...