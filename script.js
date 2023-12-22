document.addEventListener("DOMContentLoaded", function() {
  particlesJS("particles-js", {
    particles: {
      number: { value: 50, density: { enable: true, value_area: 800 } },
      color: { value: "#689f38" }, // Color de la hierba
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
      size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
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


function showModal(imageSrc) {
  // Muestra la imagen modal
  var modal = document.getElementById('noticiesVideo');
  modal.style.display = 'flex';

  // Establece la fuente de la imagen modal
  var modalImage = document.getElementById('videoNoticies');
  modalImage.src = imageSrc;

  // Muestra el icono de la cruz y asigna el evento de clic
  var closeIcon = document.getElementById('closeIcon');
  closeIcon.style.display = 'block';  // 
  closeIcon.addEventListener('click', closeModal);

  // Desactiva el desplazamiento de fondo mientras se muestra la imagen modal
  document.body.style.overflow = 'hidden';
}
// Cierra la imagen modal
function closeModal() {
  var modal = document.getElementById('noticiesVideo');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Cierra la imagen modal al hacer clic fuera de ella
document.getElementById('noticiesVideo').addEventListener('click', function (event) {
  if (event.target === this) {
    closeModal();
  }
});