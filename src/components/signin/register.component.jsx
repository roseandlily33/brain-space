import {useState} from "react";
import {useNavigate} from 'react-router-dom';
import FormInput from './form-input.component';

const RegisterForm = ({ setUser, setSignIn}) => {
    const navigate = useNavigate();
    const defaultFormFields = {
        name: '',
        email: '',
        password: '',
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { name, email, password} = formFields;
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
       const { name, email, password} = formFields;
       if(name && email && password){
        const response = await fetch('http://localhost:3004/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            }) 
        });
        if(response.ok){
            setUser(formFields);
            setSignIn(true);
            navigate('/faceID')
        } else {
            alert('An Error Occured')
        }
       }
    }

    return (
        <div className='signInForm'>
           <h2>Create an Account</h2>
           <hr />
           <form onSubmit={handleSubmit}>
           <FormInput label=""
             type="text" name="name" value={name} onChange={handleChange} placeholder="Name" required/>
             <FormInput label=""
             type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
             <FormInput label=""
             type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required/>
             <input type="submit" value="Register" />   
        </form>
        </div>
      );
}
 
export default RegisterForm;