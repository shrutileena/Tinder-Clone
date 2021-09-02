import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import elonMuskImage from "../../asset/Elon_Musk.jpg";
import jeffBezosImage from "../../asset/Jeff_Bezos.jpg";

function TinderCards() {

    const [ people, setPeople ] = useState([
        {
            name: 'Elon Musk',
            url: elonMuskImage,
        },
        {
            name: 'Jeff Bezos',
            url: jeffBezosImage,
        }
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})`}}
                            className="card"    
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
