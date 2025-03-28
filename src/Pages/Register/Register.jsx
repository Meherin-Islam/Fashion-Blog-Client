import { useContext, useState } from "react";
import Lottie from "lottie-react";
import registerLottieData from '../../assets/lottie/register.json';
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../../shared/SocialLogin";


const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext); 
    const [errors, setErrors] = useState([]); 

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value; 
       
       
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
            try {
                const userCredential = await createUser(email, password); 
                const user = userCredential.user;
             
               
                await updateUserProfile({  photoURL });
               // console.log("User registered and profile updated:", user);
            } catch (error) {
                console.error("Error during registration:", error.message);
            }
        }
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
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                type="text"
                                name="photoURL"
                                placeholder="Photo URL (optional)"
                                className="input input-bordered"
                            />
                        </div>

                        
                        {errors.length > 0 && (
                            <div className="form-control text-red-600 mt-4">
                                {errors.map((error, index) => (
                                    <p key={index} className="text-sm">{error}</p>
                                ))}
                            </div>
                        )}

                        
                        <div className="form-control mt-6">
                            <button className="btn bg-teal-500">Register</button>
                        </div>
                    </form>
                    <div className="divider"> OR</div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
