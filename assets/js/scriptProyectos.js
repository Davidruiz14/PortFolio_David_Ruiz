const buttons = document.querySelectorAll("[data-filter]");
const cards = document.querySelectorAll("article[data-lang]");

function applyFilter(filter) {
  cards.forEach((card) => {
    card.classList.toggle("hidden", card.dataset.lang !== filter);
  });

  buttons.forEach((button) => {
    button.classList.toggle("filter-btn-active", button.dataset.filter === filter);
  });
}

// Filtro inicial al cargar la pagina
applyFilter("javascript");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    applyFilter(button.dataset.filter);
  });
});
