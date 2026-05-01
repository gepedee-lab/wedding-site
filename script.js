document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const attendance = document.getElementById('attendance').value;
    
    // For now, we just show a success message
    const msg = document.getElementById('responseMsg');
    msg.innerText = `Thank you, ${name}! Your response has been received.`;
    msg.style.color = "#bfa37e";
    
    this.reset();
});
const music = document.getElementById('weddingMusic');
const btn = document.getElementById('musicControl');
const icon = document.getElementById('musicIcon');

btn.addEventListener('click', function() {
    if (music.paused) {
        music.play();
        icon.innerText = "⏸️"; // Change to pause icon
        btn.classList.add('playing');
    } else {
        music.pause();
        icon.innerText = "🎵"; // Change back to music icon
        btn.classList.remove('playing');
    }
});