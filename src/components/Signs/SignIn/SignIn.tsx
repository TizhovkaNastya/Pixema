import "./signIn.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { signIn } from "../../../redux/action-creators/user_action_creators";

export const SignIn = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [submitted, setSubmitted] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleEmail = (e:any) => {
        setEmail(e.target.value);
        setSubmitted(false);
        };
  
    const handlePassword = (e:any) => {
    setPassword(e.target.value);
    setSubmitted(false);
    };
    const handleSubmit = (e:any) => {
        e.preventDefault();
            if (email === '' || password === '') {
                setSubmitted(false);
            } else {
                setSubmitted(true);
                dispatch(signIn({
                    "email": `${email}`,
                    "password": `${password}`
                }))
                console.log(signIn)
            }
      };

return (
  <div id="Sign-In" className='sign_container'>
       <div className="form_signin">
          <form>
              <div>
                  <label className="label">
                      <h3>Email</h3>
                  </label>
                  <input onChange={handleEmail} className="input"
                  value={email} placeholder='Your email'
                   type="email" />
      
                  <label className="label">
                      <h3>Password</h3>
                  </label>
                  <input onChange={handlePassword}className="input"
                   value={password} placeholder='Your pasword'
                  type="password" />
              </div>
              <div className='btn-sign'>
                    <button onClick={handleSubmit} className="bttn" type="submit">
                      Sign In
                  </button> 
              </div>         
              <p className='have-acc'>
                Dont make an account?
                <Link to={"/sign-up"} style={{ textDecoration: "none" }}>
					<span className="form-text-link">Sign Up</span>
				</Link>
              </p>
          </form>
      </div>
  </div>
  )
};