function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

/*Hogy ha rányomunk egy olyan elemre, ami rendelkezik a data-rul-el
akkor elvisz minket az adott oldalra, ez igazából ennyi */
function onClickLink(event) {
  let target = event.target;
  if (target.tagName === "IMG") {
    target = target.parentElement;
  }
  const url = target.getAttribute("data-url");
  if (url) {
    window.location.href = url;
  }
}

// Add event listeners to buttons with data-url attribute
document.querySelectorAll("button[data-url]").forEach((button) => {
  button.addEventListener("click", onClickLink);
});
