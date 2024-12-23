import  { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';


const SocialLogin = () => {
    const { singInWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        singInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='m-4'>
            <button onClick={handleGoogleSignIn} className='btn w-full bg-teal-500'>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;