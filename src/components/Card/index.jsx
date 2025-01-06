import React from "react";
import styles from "./Card.module.scss";

function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardText}>
        <h2>Usuário da Nebula</h2>
        <p>O que é a Dark Web? Gostaria de aprender mais sobre...</p>
      </div>
      <div className={styles.cardIcons}>
        <i className="ri-chat-4-line"></i>
        <i className="ri-heart-line"></i>
      </div>
    </div>
  );
}

export default Card;
