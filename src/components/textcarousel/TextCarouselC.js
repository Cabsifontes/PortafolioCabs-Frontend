document.addEventListener("DOMContentLoaded", () => {
  const projectLinks = document.querySelectorAll(".project-link");

  projectLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.classList.add("hovered");
    });

    link.addEventListener("mouseleave", () => {
      link.classList.remove("hovered");
    });
  });
});
