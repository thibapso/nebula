import React, { useState, useEffect } from "react";
import styles from "./BackToTop.module.scss"; // Importa o SCSS como módulo

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Mostrar o botão quando o usuário rolar para baixo
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <a
      href="#"
      className={`${styles["back-to-top"]} ${showScroll ? styles.visible : ""}`} // Usando as classes do módulo
      onClick={scrollTop}
    >
      <span className="material-icons-outlined"><i class="ri-arrow-up-s-line"></i></span>
    </a>
  );
};

export default BackToTop;
