import './signUp.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../../../redux/action-creators/user_action_creators';

export const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')   
    const dispatch = useDispatch()
    const [submitted, setSubmitted] = useState(false);

    const handleName = (e:any) => {
        setName(e.target.value);
        setSubmitted(false);
        };
        
        const handleEmail = (e:any) => {
        setEmail(e.target.value);
        setSubmitted(false);
        };

        const handlePassword = (e:any) => {
        setPassword(e.target.value);
        setSubmitted(false);
        };
        
        const handlePasswordConfirm = (e:any) => {
        setPasswordConfirm(e.target.value);
        setSubmitted(false);
        };

        const handleSubmit = (e:any) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || passwordConfirm === '') {
        setSubmitted(false);
        } else {
            dispatch(signUp({
                "username": `${name}`,
                "email": `${email}`,
                "password":`${password}`
          }))  
        setSubmitted(true);
            }    
        };

    return (
        <div className='sign_container' id='Sign-Up'>
            <div className="form">
                <div>
                    <div>
                        <label className="label">
                            <h3>Name</h3>
                        </label>
                        <input onChange={handleName} className="input"
                            placeholder='Your name'
                            value={name} type="text" />

                        <label className="label">
                            <h3>Email</h3>
                        </label>
                        <input onChange={handleEmail} className="input"
                            placeholder='Your email'
                            value={email} type="email" />
            
                        <label className="label">
                            <h3>Password</h3>
                        </label>
                        <input onChange={handlePassword} className="input"
                            placeholder='Your pasword'
                            value={password} type="password" />
                        
                        <label className="label">
                            <h3>Confirm password</h3>
                        </label>
                        <input onChange={handlePasswordConfirm} className="input"
                            placeholder='Cofirm password'
                            value={passwordConfirm} type="password" />
                    </div>
                    <div className='btn-sign'>
                        <button onClick={handleSubmit} className="bttn" type="submit">
                            Sign Up
                        </button>
                    </div>    
                    <div className='have-acc'>
                        <p>
                            Alredy have an account?
                            <Link to={"/sign-in"} style={{ textDecoration: "none" }}>
					            <span className="form-text-link">Sign In</span>
				            </Link>
                        </p>
                    </div>   
                </div>
            </div>
        </div>
    );
};