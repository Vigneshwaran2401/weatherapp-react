import axios from "axios";
import { useState } from "react";

const App = () => {
    
    const [degree, setDegree] = useState(0);
    const [city, setCity] = useState("France");
    const [description, setDescription] = useState("Raining");
    const [input, setInput] = useState("");
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const getData = () => {
        const key = "05eb9f4cdcc2cd8c41198a5d8c0d306e";
        const api = axios(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${key}`);

        api.then((dalta)=> {
            setDegree(dalta.data.main.temp);
            setCity(dalta.data.name);
            setDescription(dalta.data.weather[0].main);
            setHigh(dalta.data.main.temp_max);
            setLow(dalta.data.main.temp_min);
        })
    }
    return( 
    <div className="flex flex-row justify-center h-[100vh] items-center">
        <div className="p-4 rounded-md shadow flex flex-col" style={{backgroundImage:"linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}} >
        <h2 className="font-bold">Welcome ⛅</h2>
        <p className="text-s">Do you want to know the weather report :)</p>
        <input type="text" className="rounded-md h-6 text-sm mt-2 p-1 outline-none" placeholder="Enter the city name" onChange={handleChange} />
        <button onClick={getData} className="bg-black text-white rounded-lg p-1 mt-2 text-xs">Get Report!⚡</button>
        <p className="text-s mt-2">Degree: {degree}°C | City: {city} | Weather : {description}</p>
        <p className="text-s mt-2">High/Low: {high}°C / {low} °C</p>
        </div>
    </div>);
}

export default App;
