"use client"
import axios from 'axios';
import React, { useState } from 'react';

const Page = () => {
    const [noteFormData, setNoteFormData] = useState({
        title: '',
        description: '',
    });

    const handleNoteFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNoteFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleNoteFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Note Form Data:', noteFormData);
        try {
            const response = await axios.post(`http://localhost:3000/api/v1/add-note`, noteFormData)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <div>page</div>
            <form onSubmit={handleNoteFormSubmit}>
                {/* title */}
                <div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={noteFormData.title}
                        onChange={handleNoteFormChange}
                    />
                </div>
                {/* description */}
                <div>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={noteFormData.description}
                        onChange={handleNoteFormChange}
                    />
                </div>
                {/* submit */}
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Page;
