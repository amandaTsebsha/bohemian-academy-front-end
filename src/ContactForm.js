import React, {useState} from 'react'
import axios from 'axios';


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: ''});
    const [responseMessage, setResponseMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setResponseMessage('');
        setError('');

        axios.post('http://127.0.0.1:5000/api/contact', formData)
        .then((res) => {
            setResponseMessage(res.data.message);
        })
        .catch((err) => {
            setError(err.response?.data?.message || 'An error occured.');
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit} style={{maxWidth: '400px', margin: '0 auto'}}>
                <input 
                    type='text'
                    placeholder='Name'
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    style={ {display: 'block', margin: '10px 0', padding: '10px 0'}}
                    />

                <input
                    


            </form>
        </div>

    )
}
