const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottomContainer");

window.addEventListener("scroll", () => {
  // if ( top position - navbar height - top margin of text )
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});