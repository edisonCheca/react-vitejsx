import React, { useEffect, useState } from "react";
import Card from "./Card";
import './Card.css';

const Home = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const generateRandomNumbers = () => {
            const numbers = [];
            while (numbers.length < 10) {
                const randomNum = Math.floor(Math.random() * 826) + 1;
                if (!numbers.includes(randomNum)) {
                    numbers.push(randomNum);
                }
            }
            return numbers;
        };

        const randomIds = generateRandomNumbers();

        Promise.all(randomIds.map(id => fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())))
            .then(data => {
                setCharacters(data);
            })
            .catch(error => {
                console.error('Error fetching characters:', error);
            });
    }, []);

    return (
        <div className="App">
            <div className="characters">
                {characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))}
            </div>
        </div>
    );
};
export default Home;
