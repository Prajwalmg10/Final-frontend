import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    let email=useRef('')
    let password=useRef('')
   let login=()=>{

   }
    return (<div className="Login">
        <h1 className="text-center">Login Page</h1>
        <div className="form w-25 mx-auto">
            <form action="" onSubmit={login}>
                <div className="email form-floating m-3">
                    <input type="email" id="floatingEmail" ref={email} name="email" placeholder="Email" className="form-control  pt-4" />
                    <label for="floatingEmail">Email address</label>
                </div>
                <div className="password form-floating m-3">
                    <input type="password" id="floatingPassword" ref={password} name="password" placeholder="Password" className="form-control  pt-4" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-success">LogIn</button>
                    <p>Are you a new user ?</p>
                    <Link to='/signu
                    p' className="btn btn-outline-primary">Sign Up</Link>
                </div>
            </form>
        </div>
    </div>);
}

export default Login;