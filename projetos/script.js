
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
