document.getElementById('noBtn').addEventListener('mouseover', function() {
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
});

document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'https://www.youtube.com/watch?v=kQ2ZFVJNMs0&list=RDkQ2ZFVJNMs0&start_radio=1';
});

document.getElementById('noBtn').addEventListener('click', function() {
    alert('Ah, que pena! Talvez outra vez.');
});

// Criando os corações flutuantes
function createHearts() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHearts, 500);
