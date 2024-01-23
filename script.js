function loadScript(src, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;
  script.onload = callback;
  document.head.appendChild(script);
}

// Carga asincrónica d'particles.min.js
loadScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js', function() {
  console.log('particles.min.js cargat');
});

// Carga asincrónica d'iframe_api
loadScript('https://www.youtube.com/iframe_api', function() {
  console.log('iframe_api cargat');
});

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

function showModal(videoSrc, modalId, closeIconId) {
  var modal = document.getElementById(modalId);
  modal.style.display = 'flex';

  var modalVideo = document.querySelector('iframe');
  if (modalVideo) {
    modalVideo.src = videoSrc;
  }

var closeIcon = document.getElementById(closeIconId);
closeIcon.style.display = 'block';
closeIcon.addEventListener('click', function () {
  closeModal(modalId);
});

var modalContent = document.getElementById(modalId);
modalContent.classList.add('modal-content');

document.body.style.overflow = 'hidden';
}

function playVideo() {
var modalVideo = document.getElementById('modalVideoFrame');
if (modalVideo) {
  modalVideo.currentTime = 0;
  modalVideo.play();
}
}

function closeModal(modalId) {
var modal = document.getElementById(modalId);
modal.style.display = 'none';
document.body.style.overflow = 'auto';

var modalVideo = document.getElementById('modalVideoFrame');
if (modalVideo) {
  modalVideo.src = '';
  modalVideo.pause();
}
}


document.addEventListener("DOMContentLoaded", function () {
if (event.target === this) {
  closeModal('noticiesVideo', 'noticiesVideoId');
  closeModal('residusVideo', 'residusVideoId');
  closeModal('acampadaVideo', 'acampadaVideoId');
  closeModal('llocsVideo', 'llocsVidedoId');
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

