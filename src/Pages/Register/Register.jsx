import { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json';
import AuthContext from "../../context/AuthContext/AuthContext";

const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [errors, setErrors] = useState([]);
    
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
        
        const validatePassword = (password) => {
            const errors = [];
            if (password.length < 6) {
                errors.push("Password must be at least 6 characters long.");
            }
            if (!/(?=.*[A-Z])/.test(password)) {
                errors.push("Password must contain at least one uppercase letter.");
            }
            if (!/(?=.*\d)/.test(password)) {
                errors.push("Password must contain at least one number.");
            }
            if (!/(?=.*[!@#$%^&*()_+=[\]{};:'\"\\|,.<>/?])/.test(password)) {
                errors.push("Password must contain at least one special character.");
            }
            return errors;
        };

        
        const passwordErrors = validatePassword(password);
        if (passwordErrors.length > 0) {
            setErrors(passwordErrors);
        } else {
            setErrors([]);
            console.log(email, password);  
        }
            createUser(email, password)
            .then(result => {
                 console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })

        
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie animationData={registerLottieData}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-5xl font-bold text-center mb-3">Register now!</h1>
                      
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            
                        </div>
                       
                        {errors.length > 0 && (
                            <div className="form-control text-red-600 mt-4">
                                {errors.map((error, index) => (
                                    <p key={index} className="text-sm">{error}</p>
                                ))}
                            </div>
                        )}
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
