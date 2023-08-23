import styles from "./Cardapio.module.scss"
import logo from "assets/logo.png"

export default function Cardapio() {
    return(
       <main>
           <nav className={styles.menu}>
                <img src={logo} alt="Logo do Restaurante" />
           </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
                "Catering the best restaurant in your country!"
            </div>
        </header>
        <section>
            <h3>cardapio</h3>
        </section>
       </main>
   );
}