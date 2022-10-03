import React from "react";
import HeaderBar from "../../Components/Header";
import EventCard from "./EventCard";

export default function EventView() {

    return <div>
        <HeaderBar/>
        <EventCard/>
        <EventCard/>
        <EventCard/>
    </div>
}