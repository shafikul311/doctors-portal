import React from "react";
import auth from "../../firebase.inti";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
   
    if(user){
        console.log(user)
    }
   
   return (
      <div className='flex h-5/6 justify-center item-center'>
         <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
               <h2 className="text-2xl text-center font-bold">Login</h2>
               <div className="divider">OR</div>
               <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>
            </div>
         </div>
      </div>
   );
};

export default Login;
