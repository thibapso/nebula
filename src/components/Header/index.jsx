import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navlist}>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/topics">Tópicos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
