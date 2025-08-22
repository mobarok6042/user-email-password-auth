import auth from "../../firebase/firebase.config"
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        console.log('form submitted')
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="border">
            <div className="mx-auto md:w-1/2">
                <h2 className="text-4xl ml-32 my-9">Please register</h2>
                <form className="ml-32" onSubmit={handleRegister}>
                    <input className="mb-4 w-3/4 py-2 px-4 text-center" type="email" name="email" id="email" placeholder="E-Mail" />
                    <br />
                    <input className="mb-4 w-3/4 py-2 px-4 text-center" type="password" name="password" id="password" placeholder="Password" />
                    <br />
                    <input className="btn btn-secondary mb-4 w-3/4 py-2 px-4" type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};

export default Register;