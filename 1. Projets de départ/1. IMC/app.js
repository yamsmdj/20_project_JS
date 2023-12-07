const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m

const form = document.querySelector("form");

form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();

  calculateBMI();
}

const inputs = document.querySelectorAll("input");

function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }
  const imc = (weight / Math.pow(height / 100, 2)).toFixed(1);
  showResult(imc)
  }

const valeurimc = document.querySelector('.valeur_imc')
const result = document.querySelector(".result");

function handleError() {
valeurimc.textContent = 'Wops' 
result.textContent = "Remplissez correctement les inputs.";
}

function showResult(imc) {
  const rank = bmidate.find(data => {
    if (imc >= data.range[0] && IMC < data.range[1])return data {
      
    }
  })
  valeurimc.textContent = imc
  valeurimc.style.color = `${rank.color}`
  result.textContent = `Resultat : ${rank.name}`
}