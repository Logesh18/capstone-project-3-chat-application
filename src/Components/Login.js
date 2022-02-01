import React from 'react';
import { GoogleOutlined } from '@ant-design/icons';
import { auth } from 'src/Components//Contexts/firebase';
import firebase from 'firebase/compat/app';

const Login = () => {
    return ( 
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to MyChatApp</h2>
                <br/>
                <div
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In With Google
                </div>
                <br /> <br />
            </div>
        </div>
    );
}
 
export default Login;