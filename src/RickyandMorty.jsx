import CharacterCard from './components/CharacterCard';
import './App.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";

function RickyandMorty() {
    const [character, setCharacter] = useState(null); // Inicializa character como null para evitar errores de renderizado antes de obtener los datos
    const [searchParams] = useSearchParams(); // Utiliza destructuring para obtener solo searchParams
    const id = searchParams.get("id");

    useEffect(() => {
        if (id) {
            fetch(`https://rickandmortyapi.com/api/character/${id}`)
                .then((res) => res.json())
                .then((data) => setCharacter(data)); // Almacena el personaje completo, no solo el primer elemento del array results
        }
    }, [id]);

    return (
        <div>
            {character && <CharacterCard character={character} />} {/* Renderiza el componente solo si character está definido */}
        </div>
    );
}

export default RickyandMorty;
