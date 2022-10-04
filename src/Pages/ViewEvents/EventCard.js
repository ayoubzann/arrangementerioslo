import React from "react";
import {useState, useEffect} from "react";
import Event from "../../Components/Event";


export default function EventCard() {

    const [events, setEvents] = useState([])

    const getEvents = async () => {
        const response = await fetch('https://localhost:7031/api/Arrangements');
        setEvents(await response.json());
    }

    useEffect(() => {
        getEvents()        
    }, [])

    return (
    <div>
        <h1>Arrangementer:</h1>
        {events.map(event => { 
            return ( 
                <Event name={event.name} description={event.description} id={event.id}/>)})}
    </div>
    ) 
}