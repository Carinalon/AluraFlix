import styles from "./Footer.module.css"
import logo from "./LogoFooter.png"


function Footer (){
    return(
        <footer className={styles.footer}>
            <img src={logo} alt="Logo Alura"/>
        </footer>

    )

}

export default Footer