import React, { useState } from "react";
import styles from "./Comment.module.scss";
import Card from "../Card/index.jsx";

function Comment() {
  const [comment, setComment] = useState(""); // Estado para armazenar o comentário digitado
  const [comments, setComments] = useState([]); // Estado para armazenar os cards

  const handleCommentChange = (e) => {
    setComment(e.target.value); // Atualiza o estado do comentário enquanto o usuário digita
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([comment, ...comments]); // Adiciona o novo comentário ao início da lista
      setComment(""); // Limpa o campo de comentário após enviar
    }
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.header}>
        <h1>Usuário da Nebula</h1>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="O que orbita sua mente?"
          className={styles.input}
        />
        <button className={styles.button} onClick={handleCommentSubmit}>
          Publicar
        </button>
      </div>
      <div className={styles.commentsList}>
        {/* Invertemos a ordem do array diretamente */}
        {comments.map((commentText, index) => (
          <Card key={index} comment={commentText} />
        ))}
      </div>
    </div>
  );
}

export default Comment;
