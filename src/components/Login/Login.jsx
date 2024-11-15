import React, { useRef, useState } from 'react';
import { auth } from '../../firebase.init';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {

    const [success, setSuccess] = useState(false)
    const [loginError, setLoginError] = useState('')
    const emailRef = useRef();

    const handleLogin = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        setLoginError('');

        setSuccess(false);

        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user)
            if(!result.user.emailVerified){
                setLoginError('please verified your email')
            }else{
               
                setSuccess(true)
            }
        })  
    }

    const handleForgotPassword=()=>{
          const email = emailRef.current.value;
          console.log(email);

          sendPasswordResetEmail(auth, email)
          .then(()=>{
             alert('password reset email sent')
          }).catch((error)=>{
            console.log(error)
          })


    }
    return (
        <div>
            <h2>Login pages</h2>
            <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" ref={emailRef} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label" onClick={handleForgotPassword}>
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                 {
                    success && <p className='text-green-800'>USER LOGIN SUCCESSFULL</p>
                 }
                 {
                    loginError && <p className='text-red-900'>{loginError}</p>
                 }
                </div>
            </div>
            </div>
        </div>
    );
};

export default Login;