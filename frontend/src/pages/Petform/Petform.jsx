import React, { useState } from 'react';
import axios from 'axios';
import './Petform.css'; 

const Petform = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [breed, setBreed] = useState('');
    const [species, setSpecies] = useState('');
    const [weight, setWeight] = useState('');
    const [healthCondition, setCondition] = useState('');
    const [city, setCity] = useState('');

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/pet', { name, age, breed, species, weight, healthCondition, city });
            console.log(response.data);
        } catch (error) {
            console.error(error.response.data);
        }
    };
return (
        <div className="container">
            <h2>Pet Information</h2>
            <form onSubmit={handleSave}>
                <input className="inputField" type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input className="inputField" type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
                <input className="inputField" type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} required />
                <input className="inputField" type="text" placeholder="Species" value={species} onChange={(e) => setSpecies(e.target.value)} required />
                <input className="inputField" type="text" placeholder="Weight" value={weight} onChange={(e) => setWeight(e.target.value)} required />
                <input className="inputField" type="text" placeholder="Health Condition" value={healthCondition} onChange={(e) => setCondition(e.target.value)} required />
                <input className="inputField" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
                <button className="button" type="submit">Save</button>
            </form>
        </div>
    );
};

export default Petform;