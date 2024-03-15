const text = "Seja Bem-Vindo ao Nosso Site.";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); // Altere esse valor para ajustar a velocidade da digitação
  }
}

typeWriter();

document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});
