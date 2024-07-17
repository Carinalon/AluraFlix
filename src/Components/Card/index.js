import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({ id, titulo, categoria, foto, descripcion }) {
  
  return (
    <div className={styles.container}>
      <Link className={styles.categoria} to={`/${id}`}>
        <img src={foto} alt={titulo} className={styles.foto} />
        <h2>{titulo}</h2>
      </Link>
      
    </div>
  );
}
export default Card;
