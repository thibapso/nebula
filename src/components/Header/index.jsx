import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  const location = useLocation();

  // Função para rolar até o topo da página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Rolagem suave
    });
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navlist}>
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? styles.active : ""}
              onClick={scrollToTop} // Chama a função ao clicar
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/popular"
              className={location.pathname === "/popular" ? styles.active : ""}
              onClick={scrollToTop} // Chama a função ao clicar
            >
              Popular
            </Link>
          </li>
          <li>
            <Link
              to="/topicos"
              className={location.pathname === "/topicos" ? styles.active : ""}
              onClick={scrollToTop} // Chama a função ao clicar
            >
              Tópicos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
