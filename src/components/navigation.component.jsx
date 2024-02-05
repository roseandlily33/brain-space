import { NavLink } from "react-router-dom";
import Logo from "./logo.component";
import {useNavigate} from 'react-router-dom'
const Navigation = ({signIn, setSignIn, setUser}) => {
    const navigate = useNavigate();
    const logoutHandler = () => {
        setSignIn(false);
        setUser({});
        navigate('/');
    }
    return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1em'}}>
        <NavLink to='/faceID'><Logo></Logo></NavLink>
       {
        signIn ? <h2 onClick={logoutHandler}>Sign Out</h2> 
        : 
        <div className="rightNav">
        <NavLink to='/' className="links">Create an Account</NavLink>
        <NavLink to='/signin' className="links">Sign In</NavLink>
        </div>
       }
    </nav> );
}
 
export default Navigation;