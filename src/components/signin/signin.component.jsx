import { useState } from "react";
import FormInput from "../form-input/form-input.component";

const SignInForm = () => {
    const defaultFormFields = {
        email: '',
        password: '',
    };
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value});
    }
    const handleSubmit = () => {

    }
    return (
        <>
           <h2>Have an account?</h2>
           <hr />
           <form onSubmit={handleSubmit}>
             <FormInput label=""
             type="email" name="email" value={email} onChange={handleChange} placeholder="Email" required/>
             <FormInput label=""
             type="password" name="password" value={password} onChange={handleChange} placeholder="Password" required/>
            <button type="submit">Sign In</button>       
        </form>
        </>
      );
}
 
export default SignInForm;