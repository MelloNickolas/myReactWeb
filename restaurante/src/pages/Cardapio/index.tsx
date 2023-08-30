import styles from "./Cardapio.module.scss"
import logo from "../../assets/logo.png"
import Buscador from '../Buscador/index';
import { useState } from "react";

export default function Cardapio() {
    const [busca, setBusca] = useState("")
    return(
       <main>
           <nav className={styles.menu}>
                <img src={logo} alt="Logo do Restaurante" className={styles.img}/>
           </nav>
        <header className={styles.header}>
            <div className={styles.header__text}>
                "Nico Gostozuras the best restaurant in your country!"
            </div>
        </header>
        <section>
            <h3>cardapio</h3>
            <Buscador busca={busca} setBusca={setBusca} />
        </section>
       </main>
   );
}