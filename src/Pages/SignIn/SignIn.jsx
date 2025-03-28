import Lottie from "lottie-react";
import signinLottieData from '../../assets/lottie/signin.json';
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../../shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || '/';

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        
      //  console.log(email,password);
    
        signInUser(email, password)
            .then(result => {
                // console.log('sign in' , result.user)
                 navigate(from);
            })
            .catch(error => {
               // console.log(error.message);
            })

      };
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <Lottie animationData={signinLottieData}></Lottie>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleSignIn} className="card-body">
                    <h1 className="text-5xl font-bold text-center mb-3">Sign In</h1>
                  
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
                    
                    <div className="form-control mt-6">
                        <button className="btn bg-teal-500">Sign In</button>
                    </div>
                </form>
                <div className="divider"> OR</div>
                    <SocialLogin></SocialLogin>
            </div>
        </div>
    </div>
    );
};

export default SignIn;