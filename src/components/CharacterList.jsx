import React, { useEffect, useState } from "react";
function CharacterList({ }) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function fetchDta() {
            const response = await fetch("https://rickandmortyapi.com/api/character");
            const data = await response.json();
            setCharacters(data.results);
        }
        fetchDta();
    }, []);

    return (
        <div>
            {characters.map((character) => (
                <div key={character.id}>
                    <h2>{character.name}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            ))}
        </div>
    );
}

export default CharacterList;  
