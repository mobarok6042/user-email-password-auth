import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase/firebase.config'
import { useState } from "react";
import { FaEye,FaEyeSlash } from "react-icons/fa";



const Registration = () => {

    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassowrd, setShowPassword] = useState(false);



    const handleRegister = e => {
        e.preventDefault();
        console.log('form submitted')
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(email, password,accepted);

        //reset error and success
        setRegisterError('');
        setSuccess('');


        //check for validity of credentials

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 charecters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one upper-case charecter.')
            return;
        }
        else if(!accepted){
            setRegisterError('Please accept our terms and conditions')
            return;
        }



        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User created succesfully')
            })
            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            });

    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className="flex flex-row items-center">
                                    <input name="password" type={showPassowrd ? "text" : "password"} className="input mr-2" placeholder="Password" />
                                    <span onClick={() => setShowPassword(!showPassowrd)}>{showPassowrd ? <FaEyeSlash /> : <FaEye />}</span>
                                </div>
                                <div>
                                    <input type="checkbox" name="terms" id="terms" />
                                    <label htmlFor="terms">Accept our <a href="" className="text-blue-500">Terms and Conditions</a></label>
                                </div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </form>
                            {
                                registerError && <p className="text-red-600 font-bold text-2xl">{registerError}
                                </p>
                            }
                            {
                                success && <p className="text-green-700 text-2xl font-bold">{success}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;