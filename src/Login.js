import * as React from 'react';
import { Link, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function Login() {

    const navigate = useNavigate();

    return (
        <div className="login-main-container">
            <div className="login-container">
                <div className="login-intro">
                    <h2 className="login-heading">Login</h2>
                    <p>Welcome back! Login with your credentials</p>
                </div>
                <div className="login-input">
                    <TextField id="outlined" label="Email" type="email" /><br></br>
                    <TextField id="outlined" label="Password" type="password"
                        autoComplete="current-password" /><br></br>
                    <Link to="/password-reset">Forgot Password ?</Link><br></br>
                    <Button variant="contained" color="primary">LOG IN</Button>
                    <p>Don't have an account ? <Button onclick={() => navigate("/signup")}>signup</Button>  </p>
                </div>
            </div>
        </div>
    );
}
