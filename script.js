const button1 = document.getElementById("button1");
const section2 = document.querySelector(".section2");
const img1 = document.getElementById("image1");
const img2 = document.getElementById("image2");
const img3 = document.getElementById("image3");
const audio = document.getElementById("audio1");

const steps = [
  { img: img1, duration: 2000 },
  { img: img2, duration: 500 },
  { img: img3, duration: 500 },
  { img: img2, duration: 500 },
  { img: img3, duration: 500 },
  { img: img1, duration: 1800 },
  { img: img2, duration: 500 },
  { img: img3, duration: 500 },
  { img: img2, duration: 300 },
  { img: img3, duration: 300 },
  { img: img2, duration: 300 },
  { img: img3, duration: 300 },
  { img: img2, duration: 300 },
  { img: img3, duration: 300 },
  { img: img2, duration: 300 },
  { img: img3, duration: 300 },
  { img: img2, duration: 200 },
  { img: img3, duration: 200 },
  { img: img2, duration: 200 },
  { img: img3, duration: 200 },
  { img: img2, duration: 200 },
  { img: img3, duration: 200 },
  { img: img2, duration: 150 },
  { img: img3, duration: 150 },
  { img: img2, duration: 150 },
  { img: img3, duration: 150 },
  { img: img2, duration: 150 },
  { img: img3, duration: 150 },
  { img: img1, duration: 4000 },
];

let currentTimeouts = []; // Stocker tous les `setTimeout` en cours

button1.addEventListener("click", () => {
  // Réinitialiser les images et les timeouts
  resetSequence();

  // Afficher la section et redémarrer l'audio
  section2.style.display = "flex";
  audio.currentTime = 0; // Recommencer l'audio
  audio.play();

  let stepIndex = 0;

  function showNextStep() {
    if (stepIndex < steps.length) {
      const currentStep = steps[stepIndex];
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      currentStep.img.style.display = "block";

      const timeout = setTimeout(() => {
        stepIndex++;
        showNextStep();
      }, currentStep.duration);

      // Ajouter le timeout à la liste
      currentTimeouts.push(timeout);
    } else {
      button1.innerText = "Repeat";
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";
      button1.style.backgroundColor = "rgb(156, 27, 96)";
    }
  }

  showNextStep();
});

// Fonction pour réinitialiser la séquence en cours
function resetSequence() {
  // Masquer les images
  img1.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";

  // Annuler tous les timeouts en cours
  currentTimeouts.forEach((timeout) => clearTimeout(timeout));
  currentTimeouts = []; // Vider la liste des timeouts
}
