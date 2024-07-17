import { Link } from "react-router-dom";
import styles from "./Cabecera.module.css"
import logo from "./Logo.png"




function Cabecera() {
  return (
    <header className={styles.cabecera}>
       <Link to="/">
       <div className={styles.cabecera_container}>
          <section className={styles.logoContainer}>
            <img src={logo} alt="Logo AluraFlix"/>
          </section>
          <nav className={styles.buttons}>
              <button className={styles.home}>HOME</button>
              <button className={styles.nuevoVideo}>NUEVO VIDEO</button>
          </nav>
        </div>
        </Link>

      
      </header>
    
  );
}

export default Cabecera