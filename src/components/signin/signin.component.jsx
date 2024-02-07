import { useState} from "react";
import {useNavigate} from 'react-router-dom';
import FormInput from './form-input.component';

const SignInForm = ({setUser, setSignIn}) => {
    const navigate = useNavigate();
    const defaultFormFields = {
        email: '',
        password: '',
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const { email, password } = formFields;
        if(email && password){
         const response = await fetch('https://brain-space-backend.onrender.com/signin', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: 
                    JSON.stringify({
                        email: email,
                        password: password
                    })
            })
            let res = await response.json();
            if(res){
                setUser(res);
                setSignIn(true);
                navigate('/faceID')
            } else {
                alert ('An Error Occured')
            }
        }
    }
    return (
        <div className='signInForm'>
           <h2>Have an account?</h2>
           <hr />
           <form onSubmit={handleSubmit}>
             <FormInput label=""
             type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
             <FormInput label=""
             type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required/>
           <input type="submit" value="Sign In" className="button" />     
        </form>
        </div>
      );
}
 
export default SignInForm;