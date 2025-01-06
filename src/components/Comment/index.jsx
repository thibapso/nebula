import React from "react";
import styles from "./Comment.module.scss";

function Comment() {
  return (
    <div className={styles.commentContainer}>
      <h1>Usuário da Nebula</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="O que orbita sua mente?"
          className={styles.input}
        />
        <button className={styles.button}>Publicar</button>
      </div>
    </div>
  );
}

export default Comment;
