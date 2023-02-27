import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
const SignUp = () => {
    let navigate = useNavigate()
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [password, setpassword] = useState('')
    let [confirmpassword, setCpassword] = useState('')
    let [mobileno, setmobile] = useState('')

    let Signup = (e) => {
        e.preventDefault();
        let data = { name, email, mobileno, password, confirmpassword }
        console.log(data);
        if (name && email && (password === confirmpassword)) {
            axios.post('http://localhost:3333/signup', data).then((res) => {
                alert(res.data.message);
                navigate('/')
            })
        }else{
            alert('invalid credentials')
        }
    }
    return (<div className="">
        <div className="Sign form w-25 mx-auto">
            <h1 className="text-center">Sign Up</h1>
            <form className="" action="" onSubmit={Signup}>
                <div className="Name form-floating m-3">
                    <input type="text" id="floatingName" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="form-control pt-4" />
                    <label for="floatingName">Name</label>
                </div>
                <div className="Email form-floating m-3">
                    <input type="email" id="floatingEmail" name="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} className="form-control  pt-4" />
                    <label for="floatingEmail">Email address</label>
                </div>
                <div className="mobileno form-floating m-3">
                    <input type="phone" id="floatingMobile" minLength={10} maxLength={10} name="mobileno" placeholder="Phone Number" value={mobileno} onChange={e => setmobile(e.target.value)} className="form-control  pt-4" />
                    <label for="floatingMobile">Phone Number</label>
                </div>
                <div className="password form-floating m-3">
                    <input type="password" id="floatingPassword" name="password" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} className="form-control  pt-4" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className="confirm_password form-floating m-3">
                    <input type="password" id="floatingConfirmPassword" name="password" placeholder="Confirm Password" value={confirmpassword} onChange={e => setCpassword(e.target.value)} className="form-control  pt-4" />
                    <label for="floatingConfirmPassword">Confirm Password</label>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-success">Sign Up</button>
                </div>
            </form>
            <div className="login_button text-center">
                <p>Already a user ?</p>
                <Link to="/">Login</Link>
            </div>
        </div>
    </div>);
}

export default SignUp;