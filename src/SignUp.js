import * as React from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export function SignUp() {

    return (
        <div className="signup-main-container">
            <div className="signup-container">
                <div className="signup-intro">
                    <h2 className="signup-heading">Sign Up Now</h2>
                    <p>Please fill the details and create account</p>
                </div>
                <div className="signup-input">
                    <TextField id="outlined" label="FullName" type="text" /><br></br>
                    <TextField id="outlined" label="Email" type="email" /><br></br>
                    <TextField id="outlined" label="Password" type="password"
                        autoComplete="current-password" /><br></br>
                    <Link class="reset-password" to="/password-reset">Forgot Password ?</Link><br></br>
                    <Button variant="contained" color="primary">SIGN UP</Button>
                    <p>Already have account ? <Link to="login">Log IN</Link></p>
                </div>

            </div>
        </div>
    );
}
