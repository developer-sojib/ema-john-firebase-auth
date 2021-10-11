import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const { user, signInUsingGoogle } = useFirebase()
    return (
        <div className='login-form'>
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name='' id='' placeholder='Your email' />
                    <br />
                    <input type="password" name='' id='' placeholder='Your email' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New to ema-john? <Link to='/register'>Create Account</Link> </p>
                <div>----------or----------</div>
                <button
                    onClick={signInUsingGoogle}
                    className='btn btn-regular'
                >Google Sign-In</button>
            </div>
        </div>
    );
};

export default Login;