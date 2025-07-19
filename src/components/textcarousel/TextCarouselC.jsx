import React, { useEffect } from "react";
import "./TextCarouselC.css";

const TextCarouselC = () => {
  useEffect(() => {
    const projectLinks = document.querySelectorAll(".project-link");

    projectLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        link.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        link.classList.remove("hovered");
      });
    });

    return () => {
      projectLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => {});
        link.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="text-carousel-container">
      <ul className="projects-list">
        <li className="project-item">
          <span className="project-date">Cabs /</span>
          <a href="#" className="project-link with-bg">
            <span className="word">¡HOLA!</span>
          </a>
        </li>
        <li className="project-item">
          <a href="#" className="project-link small-text-link with-bg">
            <span className="word">Bienvenidos</span>
            <br />
            <span className="word">a mi portafolio</span>
            <br />
            <span className="word">digital</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default TextCarouselC;
