// Simple form for a new server entry
import React, { useState } from 'react';
import axios from 'axios';

function ServerForm() {
    const [name, setName] = useState("");
    const [language, setLanguage] = useState("");
    const [framework, setFramework] = useState("");

    const handleSubmit = event => {
        event.preventDefault();

        const server = {
            name: name,
            language: language,
            framework: framework,
        };

        axios.post(`http://localhost:8080/api/servers`, { server })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Language:
                <input type="text" name="language" onChange={e => setLanguage(e.target.value)} />
            </label>
            <label>
                Framework:
                <input type="text" name="framework" onChange={e => setFramework(e.target.value)} />
            </label>
            <button type="submit">Add</button>
        </form>
    );
}

export default ServerForm;
