import React from "react";
import styles from "./Card.module.scss";

function Card({ comment }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardText}>
        <h2>Usuário da Nebula</h2>
        <p>{comment}</p> {/* Exibe o comentário passado como prop */}
      </div>
      <div className={styles.cardIcons}>
        <i className="ri-chat-4-line"></i>
        <i className="ri-heart-line"></i>
      </div>
    </div>
  );
}

export default Card;
