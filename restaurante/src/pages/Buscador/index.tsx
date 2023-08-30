import style from "../Buscador/Buscador.module.scss"

interface Props { 
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca} : Props) {    
    return(
        <div>
            <input value={busca}
                onChange={(evento) => setBusca(evento.target.value)}
            />
        </div>
    );
}