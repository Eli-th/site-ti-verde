
// Exemplo básico: Destacar a guia atual no menu

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.style.backgroundColor = "#1b4332";
    }
  });
});
