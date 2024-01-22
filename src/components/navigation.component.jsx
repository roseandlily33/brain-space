import Logo from "./logo.component";
const Navigation = () => {

    return (
    <nav style={{display: 'flex', justifyContent: 'space-between', padding: '1em'}}>
        <Logo></Logo>
        <h2 className="f3 link dim black underline pa3 pointer">Sign Out</h2>
    </nav> );
}
 
export default Navigation;