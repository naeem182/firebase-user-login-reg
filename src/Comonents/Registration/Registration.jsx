import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import auth from '../../firebase.config';


const Registration = () => {


    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showpass, setshowpass] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault();
        // console.log("for  sub");
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)




        // reset error and success
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError("used a uppercase")
            return
        }

        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                console.log(result.user)
                setSuccess("created succesfully")
                return
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message)
            })

    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Registration now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>

                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpass ? "text" : "password"} placeholder="password" name='password' className="input input-bordered" /> <span onClick={() => setshowpass(!showpass)} >show</span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" />
                            </div>
                        </div>
                        {
                            registerError && <p className="text-red-700">{registerError}</p>
                        }
                        {
                            success && <p className="text-green-600">{success}</p>
                        }

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Registration
