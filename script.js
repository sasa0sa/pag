// fondo 
document.addEventListener("DOMContentLoaded", function() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#0ea5e9" }, 
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 5, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
      line_linked: { enable: false },
      move: { enable: true, speed: 0.5, direction: "bottom", random: true, straight: false, out_mode: "out", bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: false, mode: "repulse" }, onclick: { enable: false, mode: "push" }, resize: true },
    },
    retina_detect: true
  });
});



// per als videos 
function showModal(videoSrc) {

  var modal = document.getElementById('noticiesVideo');
  modal.style.display = 'flex';


  var modalVideo = document.getElementById('videoNoticies');
  modalVideo.src = videoSrc;


  var closeIcon = document.getElementById('closeIcon');
  closeIcon.style.display = 'block';  // 
  closeIcon.addEventListener('click', closeModal);

   var modalContent = document.getElementById('noticiesVideo');
modalContent.classList.add('modal-content');
 

  document.body.style.overflow = 'hidden';
}

// per tancar 
function closeModal() {
  var modal = document.getElementById('noticiesVideo');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.addEventListener("DOMContentLoaded", function() {
  if (event.target === this) {
    closeModal();
  }
});

// fleches 
let currentOpenContentId = null;

function toggleContent(elementId) {
    const content = document.getElementById(elementId);

    if (currentOpenContentId && currentOpenContentId !== elementId) {
        const currentOpenContent = document.getElementById(currentOpenContentId);
        currentOpenContent.classList.add('hidden');
    }

    content.classList.toggle('hidden');
    currentOpenContentId = content.classList.contains('hidden') ? null : elementId;
}