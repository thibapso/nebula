import React from "react";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navlist}>
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#about">Popular</a>
          </li>
          <li>
            <a href="#contact">Tópicos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
