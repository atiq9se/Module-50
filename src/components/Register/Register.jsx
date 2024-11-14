import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { createUserWithEmailAndPassword } from "firebase/auth";


const Register = () => {
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const handleRegister = (event)=>{
       event.preventDefault();
       const email = event.target.email.value;
       const password = event.target.password.value;
       
       setErrorMessage('');
       setSuccess(false);

       if(password.length < 6){
        setErrorMessage('Password should be 6 characters or longer')
       }
       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
       if(!passwordRegex.test(password)){
        setErrorMessage('At least uppercase, one lowercase, one number, one special character')
       }
       
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            console.log(result.user);
            setSuccess(true)
        }).catch((error)=>{
           setErrorMessage(error.message)
           setSuccess(false)
        })
       

    }
    return (
        <div>
            <h2>Register page</h2>
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
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    {
                        errorMessage && <p className='text-red-900'> {errorMessage}</p>
                    }
                    {
                        success && <p className='text-green-900'>Sign up is Successully </p>
                    }
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;