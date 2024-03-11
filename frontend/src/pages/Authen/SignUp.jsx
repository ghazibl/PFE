import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import Success from '../../components/success/Success';

const SignUp = () => {
    const [nom, setNom] = useState('');
    const [adresse, setAdresse] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:4000/api/users', {
                nom,
                adresse,
                email,
                Mdp: password,
            });
            console.log(response.data);
            setSuccess(true);
            setNom('');
            setPrenom('');
            setEmail('');
            setPassword('');
        } catch (error) {
            setError(error.response.data.error);
        }
        setLoading(false);
    };

    return (
        <div className='container'>
            <h1 className='titre'>S'inscrire</h1>
            
            <form onSubmit={handleSubmit}>
                <label>Nom:</label>
                <input type='text' placeholder='Entrer votre nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                <label>Adresse:</label>
                <input type='text' placeholder='Entrer votre adresse' value={adresse} onChange={(e) => setAdresse(e.target.value)} />
                <label>Email:</label>
                <input type='text' placeholder='Entrer votre email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Mot de passe:</label>
                <input type='password' placeholder='Entrer votre mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} />
                {
                    success && <Success />
                }
                {error && <div className="error-message">{error}</div>}
                <div className="d-grid">
                    <button type="submit" disabled={loading}>{loading ? 'Chargement...' : 'Inscription'}</button>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
