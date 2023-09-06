import styles from "./Cardapio.module.scss"
import logo from "../../assets/logo.png"
import Buscador from '../Buscador/index';
import { useState } from "react";
import FIltros from '../Filtros/index';

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
        <section className={styles.cardapio}>
            <h3 className={styles.cardapio__titulo}>Cardápio</h3>
            <Buscador busca={busca} setBusca={setBusca} />
            <div className={styles.cardapio__filtros}>
            <FIltros/>
            </div>
        </section>
       </main>
   );
}