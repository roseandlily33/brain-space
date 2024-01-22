import Tilt from 'react-parallax-tilt';
import Brain from '../images/icons8-brain-ios-17/icons8-brain-100.png';
const Logo = () => {
    return (
        <Tilt glareColor='#ffffff' glareBorderRadius='5' glarePosition='right'>
        <div style={{ height: '100px',width: '100px', backgroundColor: 'hotpink', padding: '1em', borderRadius: '2em' }}>
        <img src={Brain} alt="brain logo" />
        </div>
      </Tilt>
    );
}
 
export default Logo;