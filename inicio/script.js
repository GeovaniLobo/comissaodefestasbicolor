

const imgs = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".botao i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 7000; //Tempo padrão para apresentação de slides automática

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); //Inicia o slideshow



// Obtém o caminho da URL da página atual
const path = window.location.pathname;

// Verifica qual página estamos e adiciona a classe de destaque ao link correspondente
if (path.includes("/inicio/")) {
    document.getElementById("inicio-link").classList.add("selected");
} else if (path.includes("/sobre/")) {
    document.getElementById("sobre-link").classList.add("selected");
} else if (path.includes("/projetos/")) {
    document.getElementById("projetos-link").classList.add("selected");
} else if (path.includes("/contato/")) {
    document.getElementById("contato-link").classList.add("selected");
}


document.querySelector('.menu-toggle').addEventListener('click', function() {
  document.querySelector('.menu').classList.toggle('active');
});
