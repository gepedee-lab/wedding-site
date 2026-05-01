// Music Control
const music = document.getElementById('weddingMusic');
const musicBtn = document.getElementById('musicControl');
const icon = document.getElementById('musicIcon');

musicBtn.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        icon.innerText = "⏸️";
    } else {
        music.pause();
        icon.innerText = "🎵";
    }
});

// RSVP Form Submission
document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const msg = document.getElementById('responseMsg');
    msg.innerText = `Thank you, ${name}! Your response has been received.`;
    this.reset();
});