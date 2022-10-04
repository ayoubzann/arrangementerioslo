import React from "react";

export default function Event(name, description, id) {


    return (
        <div>
            <p>Arrangementet heter: {name}</p>
            <p>Beskrivelse:{description}</p>
            <p>Arrangement ID: {id}</p>
        </div>
    )
}