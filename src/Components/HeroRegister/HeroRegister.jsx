import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const HeroRegister = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const handleRegister = e => {
        e.preventDefault();
        console.log('form submitted')
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password,accepted)
        //reset error
        setRegisterError('');
        setSuccess('');


        if (password.length < 6) {
            setRegisterError('Password should be at least 6 charecters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case charecters.');
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions.')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User created succesfully.')
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            });
    }



    return (
        <div>
            <div className="hero bg-base-200 min-h-screen w-9/12 mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register Now.</h1>
                        <p className="py-6">
                            Open a new account as our very first client.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <label className="label">Email</label>
                                <input name='email' type="email" className="input" placeholder="Email" required />
                                <label className="label">Password</label>
                                <input name='password'
                                    type={showPassword ? "text" : "password"}
                                    className="input"
                                    placeholder="Password" required />
                                <span onClick={() => setShowPassword(!showPassword)}>Show Password</span>
                                <br />
                                <div className="mb-2 ml-4 mt-4">
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms">Accept our <a className="text-blue-700" href="">terms and condition.</a> </label>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                            {
                                registerError && <p className="text-red-600 text-2xl font-bold">{registerError}</p>
                            }
                            {
                                success && <p className="text-green-500 text-2xl font-bold">{success}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroRegister;