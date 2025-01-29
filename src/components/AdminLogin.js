import React, { useState } from 'react';
import '../styles/Login.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');

    return (
        <div className="login-page">
            <h2>Admin Login</h2>
            <form>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value="admin123" readOnly />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AdminLogin;
